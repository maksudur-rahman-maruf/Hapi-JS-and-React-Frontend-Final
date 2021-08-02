import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from 'axios';
import "./Edit.css";
import { useState } from "react";

const Edit = () => {

  const { id } = useParams();

  const [updatedFirstName, setFirstName] = useState("");
  const [updatedLastName, setLastName] = useState("");

  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/person/${id}`).then((response) => {
      setEmployee(response.data);
      console.log(response.data);
    })
  }, [id]);

  const updatePerson = () => {
    Axios.put(`http://localhost:3001/person/${id}`, {
      firstname: updatedFirstName,
      lastname: updatedLastName
    });

    console.log('finish' + updatedLastName);
  };


  const editFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const editLastName = (e) => {
    setLastName(e.target.value);
  };


  return (
    <div className="edit">
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {employee._id}</h1>
          </Form.Label>
        </Form.Group>

        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            onChange={editFirstName}
            placeholder={employee.firstname}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            onChange={editLastName}
            placeholder={employee.lastname}
          />
        </Form.Group>

        <Link to="/">
          <Button className="m-3" onClick={updatePerson} variant="primary" type="submit">
            Edit User
          </Button>

          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>

      </Form>

    </div>
  );
};

export default Edit;
