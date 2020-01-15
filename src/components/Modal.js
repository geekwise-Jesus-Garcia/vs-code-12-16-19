import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default class BranchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }
  handleChange = e => {
    let { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };
  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Bank </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="branch_name">Branch Name</Label>
              <Input
                type="text"
                name="branch_name"
                value={this.state.activeItem.branch_name}
                onChange={this.handleChange}
                placeholder="Bank Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="branch_location">branch location</Label>
              <Input
                type="text"
                name="branch_location"
                value={this.state.activeItem.branch_location}
                onChange={this.handleChange}
                placeholder="Enter Location"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
