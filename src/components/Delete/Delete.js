import React from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios';
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "./Delete.css";

const Delete = () => {

  const { id } = useParams();

  const deletePerson = (id) => {
    Axios.delete(`http://localhost:3001/person/${id}`);
  };

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/">
            <Button className="delete__btn" variant="info">Cancel</Button>
            <Button onClick={() => deletePerson(id)} variant="danger">
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Delete;
