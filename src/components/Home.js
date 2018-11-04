import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import axios from 'axios';
// import Header from './Header';
// import AppRouter from './AppRouter';



class Home extends Component {

  constructor(props) {
    super(props);
    this.REACT_STATE_STORAGE = 'reactState';
    this.state = {textData:'', showHistory: false};
    this.stateHistory = [];


  }

  componentWillUnmount() {

  }

/*   componentWillUpdate () {
    // note: local storage only stores data
    console.log(localStorage.getItem(this.REACT_STATE_STORAGE));
  } */

  handlechangeText = (event) => {
    console.log(event.target.value);
    this.setState({
      textData: event.target.value
    });
  }

  toggleHistory = () => {
    this.setState ({
      showHistory: !this.state.showHistory
    })
  }

  handleSaveText = () => {
    this.stateHistory.unshift({
      timestamp: + new Date(),
      textData:this.state.textData
    })
    console.log(this.stateHistory);
    this.setState({
      textData: ''
    });
  }

  mockAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let randNum = Math.random().toString(36).replace('0.', '');
        resolve({ status: 'OK', data: randNum});
      }, 200);
    })
  }

  fetchData = (link, method) => {
    return () => {
      console.log(`clicked ${link} with ${method}`);
/*       return axios({
        method: method,
        url: link,
        responseType: 'json'
      }) */
      this.mockAsync()
      .then (res => {
        console.log(res);
        this.setState({data:res.data});
        localStorage.setItem(this.REACT_STATE_STORAGE, res.data);
      })
      .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div className="">
      <div className='row'>
        <div className="col-7">
          <input type="text" id='inputText' value={this.state.textData} onChange={this.handlechangeText}></input>
        </div>
        <div className="col-5">
          <button id='saveButton' className='btn btn-primary ml-2 mt-2' onClick={this.handleSaveText}>Save</button>
          <button id='saveButton' className='btn btn-danger ml-2 mt-2' onClick={this.toggleHistory}>Toggle History</button>
        </div>
      </div>
      {this.state.showHistory &&
      <div>
      <div className='row'><h4>History</h4></div>
      <div className='row'>
        <div className='col-12'>
          <ul>
          {this.stateHistory.map((item, index) => 
            <li key={index} id={index}>{item.textData}{/*item.timestamp*/}</li>
          )}
          </ul>
        </div>
      </div>
      </div>
      }
      </div>
    );
  }
}

export default Home;
