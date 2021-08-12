import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "./Home.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


const Home = () => {

  const [employeeList, setEmployeeList] = useState([]);
  // console.log(employeeList);

  useEffect(() => {
    Axios.get("http://localhost:3001/people").then((response) => {
      setEmployeeList(response.data);
    })
  },[employeeList]);


  return (
    <div>
      <Link to="/create">
        <Button className="create__btn" variant="primary">
          Create User
        </Button>
      </Link>

      <Table striped bordered>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((user) => (
            <tr>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>
                <Link to={"/read/"+user._id}>
                  <Button className="action__btn" variant="success">
                    Read
                  </Button>
                </Link>
                <Link to={"/edit/"+user._id}>
                <Button className="action__btn" variant="info">
                  Edit
                </Button>
                </Link>
                <Link to={"/delete/"+user._id}>
                <Button className="action__btn" variant="danger">
                  Delete
                </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
