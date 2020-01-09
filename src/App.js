import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm'
import './components/ContactForm.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  submit = values => {
    this.setState({
      data: [...this.state.data, values]
    });
  }
  handleChange = values => {
    this.setState({
      data: [...this.state.data, values]
    })
  }
  render() {
    return (
      <div>
        <ContactForm onSubmit={this.submit} />
        <table>
          <thead>
            <tr>
              <th> Id </th>
              <th> Email </th>
              <th> First Name </th>
              <th> Last Name </th>
              <th class="th-action"> Action </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length > 0 && this.state.data.map((item, index) =>
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {item.email} </td>
                <td> {item.firstName}</td>
                <td> {item.lastName} </td>
                <td class="td-action">
                  <button class="btn-edit" onClick={this.handleChange}> Edit </button>
                  <button class="btn-delete"> Delete</button>
                </td>
              </tr>
            )}
          </tbody>
          <br />
        </table>


      </div >
    );

  }
}
export default App;

