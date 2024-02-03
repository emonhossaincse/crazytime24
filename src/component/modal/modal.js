import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyModal = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your modal content goes here.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const YourComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <button onClick={handleShow}>Open Modal</button>
      <MyModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
};

export default YourComponent;
