import React, { Component } from "react";
import BranchModal from "./Modal";
import axios from "axios";
// import { HashRouter as Router, Route } from "react-router-dom";
// import { AiOutlineBank } from 'react-icons/fa';




class Branch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        branch_name: '',
        branch_location: '',
        completed: false
      },
      bankApp: []
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://127.0.0.1:8000/branch/")
      .then(res => this.setState({ bankApp: res.data.results }))
      .catch(err => console.log(err));
  };
  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };
  renderTabList = () => {
    return (
        <div className="my-5 tab-list">
        <span
            onClick={() => this.displayBranch(true)}
            className={this.state.viewCompleted ? "active" : ""}
        >
            Branch
        </span>
        <span
            onClick={() => this.displayCustomer(false)}
            className={this.state.viewCompleted ? "" : "active" }
        >
            Customer
        </span>
        <span
            onClick={() => this.displayProduct(false)}
            className={this.state.viewCompleted ? "" : "active"}
        >
            Products
        </span>
        <span
            onClick={() => this.displayAccount(false)}
            className={this.state.viewCompleted ? "" : "active"} 
        >
            Account
        </span>
        </div>
    );
    };
  renderItems = () => {
    // const { viewCompleted } = this.state;
    // const newItems = this.state.bankApp.filter(
    //   item => item.completed === viewCompleted
    // );
    const newItems=this.state.bankApp
    console.log(newItems)
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.branch_name}
        >
          {item.branch_name}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            {" "}
            Edit{" "}
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://127.0.0.1:8000/branch/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("http://127.0.0.1:8000/branch/", item)
      .then(res => this.refreshList());
  };
  handleDelete = item => {
    axios
      .delete(`http://127.0.0.1:8000/branch/${item.id}`)
      .then(res => this.refreshList());
  };
  createItem = () => {
    const item = { branch_name: "", branch_location: "" };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4"> Bank App </h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add Account
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <BranchModal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default Branch;
