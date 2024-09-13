import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AdminAddProd = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [imgURL1, setImgURL1] = useState("");
  const [imgURL2, setImgURL2] = useState("");
  const [imgURL3, setImgURL3] = useState("");

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (name && imgURL1 && imgURL2 && imgURL3 && price && discount) {
      const newProd = {
        id: Math.random(),
        name: name,
        imgURL: [
          { id: Math.random(), URL: imgURL1 },
          { id: Math.random(), URL: imgURL2 },
          { id: Math.random(), URL: imgURL3 },
        ],
        price: price,
        discount: discount,
      };
      add(newProd);
      setDiscount(0);
      setImgURL1("");
      setImgURL2("");
      setImgURL3("");
      setName("");
      setPrice(0);
      handleClose();
    } else alert("add all informations");
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        ADD THE PRODUCT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link"
                autoFocus
                value={imgURL1}
                onChange={(e) => setImgURL1(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link"
                autoFocus
                value={imgURL2}
                onChange={(e) => setImgURL2(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link"
                autoFocus
                value={imgURL3}
                onChange={(e) => setImgURL3(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Price"
                autoFocus
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type="Number"
                placeholder="% of Discount"
                autoFocus
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="Submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminAddProd;
