import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

// import $ from 'jquery';
//import BootstrapTable from 'reactjs-bootstrap-table';

class Content extends Component {
  render() {
    console.log({ data2: this.props.data });

    return (
      <div>
        {
          this.props.data &&
            <ReactTable
              data={this.props.data}
              columns={[
                {
                  Header: "Company Info",
                  columns: [
                    {
                      Header: "Name",
                      accessor: "company.name"
                    },
                    {
                      Header: "Service",
                      accessor: "company.bs"
                    }
                  ]
                },
                {
                  Header: "Address",
                  columns: [
                    {
                      Header: "City",
                      accessor: "address.city"
                    },
                    {
                      Header: "Streat",
                      accessor: "address.street"
                    },
                    {
                      Header: "Suite",
                      accessor: "address.suite"
                    }
                  ]
                }
              ]}
              className="-striped -highlight"
            />
        }
      </div>
    );
  }
}

export default Content;
