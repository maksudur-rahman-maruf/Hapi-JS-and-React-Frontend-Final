import React, { useState } from "react";
import Axios from 'axios';
import "./Create.css"
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Create = () => {
 
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const addToList = () => {
    Axios.post("http://localhost:3001/person", {
      firstname: firstname,
      lastname: lastname
    });
  };


  const updateFirstName = (e) => {
    setFirstname(e.target.value);
  };

  const updateLastName = (e) => {
    setLastname(e.target.value);
  };


  return (
    <div className="create">
      <Form>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={firstname}
            onChange={updateFirstName}
            placeholder="Enter First Name"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={lastname}
            onChange={updateLastName}
            placeholder="Enter Last Name"
          />
        </Form.Group>

        <Link to="/">
          <Button onClick={addToList} className="m-2 mt-3" variant="primary" type="submit">
            Create User
          </Button>

          <Button className="m-2 mt-3" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;
