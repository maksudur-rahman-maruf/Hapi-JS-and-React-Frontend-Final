import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "./Read.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Read = () => {

  const { id } = useParams();

  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/person/${id}`).then((response) => {
      setEmployee(response.data);
    })
  },[id]);

  return (
    <div className="read">
      <h1>Firstname: {employee.firstname}</h1>
      <h1>Lastname: {employee.lastname}</h1>

      <Link to="/">
        <Button className="mt-4" variant="info">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default Read;
