import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser, findByIdUser } from "../store/actions/userActions";

function EditStudent() {
  const dispatch = useDispatch();

  let { id } = useParams();
  var editdata = useSelector((state) => state.users.users);

  let navigate = useNavigate();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [cls, setCls] = useState();

  let getData = () => {
    dispatch(findByIdUser(id));
    if (editdata && editdata) {
      setName(editdata.name);
      setEmail(editdata.email);
      setMobile(editdata.mobile);
      setCls(editdata.class);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let handleSubmit = async () => {
    try {
      dispatch(
        updateUser({ name: name, email: email, mobile: mobile, class: cls }, id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form style={{ width: "400px" }}>
      <h3>Edit user</h3>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          value={mobile}
          type="text"
          placeholder="Mobile"
          onChange={(e) => setMobile(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Class</Form.Label>
        <Form.Control
          value={cls}
          type="text"
          placeholder="Class"
          onChange={(e) => setCls(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit}>
        Update
      </Button>
    </Form>
  );
}

export default EditStudent;
