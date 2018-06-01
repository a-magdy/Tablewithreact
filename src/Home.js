import React, { Component } from "react";
import ReactTable from "react-table";
import Content from "./Content";

class Home extends Component {
  render() {
    const uData2 = this.props.data;

    console.log({ uData2 });

    return (
      <div>
        Hello you are Home!!
        {
          this.props.data &&
            <ReactTable
              data={uData2}
              columns={[
                {
                  Header: "User Details",
                  columns: [
                    {
                      Header: "Name",
                      accessor: "name"
                    },
                    {
                      Header: "Username",
                      id: "userName",
                      accessor: d => d.username
                    },
                    {
                      Header: "Email",
                      accessor: "email"
                    },
                    {
                      Header: "Phone",
                      accessor: "phone"
                    },
                    {
                      Header: "Website",
                      accessor: "website"
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
export default Home;
