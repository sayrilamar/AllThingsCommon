import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { makeData } from "./Utils.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>All Things Common</h1>
        </header>

        <div className="App-body">
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Total Gave",
                  accessor: "gave"
                }
              ]
            },
            {
              Header: 'Results',
              columns: [
                {
                  Header: "Total Made",
                  accessor: "tmade"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        </div>
        
      </div>
    );
  }
}

export default App;
