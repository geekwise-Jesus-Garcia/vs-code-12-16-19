import React, { Component } from 'react';
import axios from 'axios';
import Model from './Model';
import AddItem from './AddItem'

let CancelToken = axios.CancelToken;
let cancel;

export class Accounts extends Component {
    state = {
        accountsList: [],
    }

    deleteAccount = (accountId)=> {
        // console.log(acc)
        axios.delete(`https://g-f-django-bank-app.herokuapp.com/accounts/${accountId}/`)
        .then(res => this.setState({accountsList: this.state.accountsList.filter(
            account => account.id !== accountId
        )}))
    }
    
    addAccount = (submitText)=> {
        axios.post('https://g-f-django-bank-app.herokuapp.com/accounts/',
        {
            name: submitText
        }).then(res => this.setState(
            {accountsList: [res.data, ...this.state.accountsList]}
        )).catch(err => console.log(err));
    }

    updateAccount = (accountId, accountName) => {
        let body = {
          id: accountId,
          name: accountName
      }

      axios.put(`https://g-f-django-bank-app.herokuapp.com/accounts/${accountId}/`, body)
      .then(res => {
          this.refreshAccounts();
      }).catch(err => console.log(err));
    }

    componentDidMount() {
        this.refreshAccounts()
    }

    componentWillUnmount() {
        cancel();
    }


    refreshAccounts = () => {
        let cancelToken = new CancelToken(function executor(c) {
            cancel = c;
          })
        axios.get('https://g-f-django-bank-app.herokuapp.com/accounts/', {
            cancelToken: cancelToken
        })
        .then(res => {this.setState({accountsList: res.data})
        })
        .catch(err => console.log(err))
    }

    renderAccounts = () => {
        let accountsList = this.state.accountsList
        
        return accountsList.map(account => (
            <Model deleteItem={this.deleteAccount} editItem={this.updateAccount}
            key={account.id} item={account}/>
        ));
    };

    branchStyle = {
        width: '100%',
        marginTop: '55px',
    }

    render() {
        return (
            <div style={this.branchStyle}>
                <div>
                    <AddItem 
                    placeholder={"Account's name"} addItem={this.addAccount}
                    />
                </div>
                <div>
                    {this.renderAccounts()}
                </div>
            </div>
        )
    }
}

export default Accounts