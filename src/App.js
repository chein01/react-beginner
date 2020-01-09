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
    this.deleteItem = this.deleteItem.bind(this);
  }

  submit = values => {
    this.setState({
      data: [...this.state.data, values]
    });
  }

  deleteItem(item) {
    const index = this.state.data.indexOf(item);
    const { data } = this.state;
    this.setState({
      data: [
        ...data.slice(0, index),
        ...data.slice(index + 1)
      ]
    });
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
              <th className="th-action"> Action </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length > 0 && this.state.data.map((item, index) =>
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {item.email} </td>
                <td> {item.firstName}</td>
                <td> {item.lastName} </td>
                <td className="td-action">
                  <button className="btn-edit" > Edit </button>
                  <button className="btn-delete" onClick={() => this.deleteItem(item)}> Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div >
    );

  }
}
export default App;

