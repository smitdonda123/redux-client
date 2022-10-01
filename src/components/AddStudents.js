import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  updateUser,
  findByIdUser,
} from "../store/actions/userActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function AddStudents() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();

  // const newUserData = useSelector((state) => state);
  // console.log(newUserData);

  let handleSubmit = async (values) => {
    try {
      if (id === "new") {
        dispatch(addUser(values));
        navigate("/all-students");  
      } else {
        dispatch(updateUser(values, id));
        navigate("/all-students");
      }
    } catch (error) {
      console.log(error);
    }
  };

  var editdata = useSelector((state) => state.users.user);
  useEffect(() => {
    if (id !== "new") {
      dispatch(findByIdUser(id));
    }
  }, [id, dispatch]);

  const Formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: editdata && editdata.name ? editdata.name : "",
      email: editdata && editdata.email ? editdata.email : "",
      mobile: editdata && editdata.mobile ? editdata.mobile : "",
      class: editdata && editdata.class ? editdata.class : "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Please enter a name"),
      email: yup.string().required("Please enter a email address"),
      mobile: yup.string().required("Please enter the Mobile Number"),
      class: yup.string().required("Please enter the class"),
    }),
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm(values);
    },
  });

  return (
    <div className="d-flex justify-content-center">
      <Form onSubmit={Formik.handleSubmit} style={{ width: "400px" }}>
        <h3 className="mt-5">Add Student</h3>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            onBlur={Formik.handleBlur}
            onChange={Formik.handleChange}
            value={Formik.values.name}
          />
          {Formik.touched.name && Formik.errors.name ? (
            <Form.Text className="text-danger">{Formik.errors.name}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onBlur={Formik.handleBlur}
            onChange={Formik.handleChange}
            value={Formik.values.email}
          />
          {Formik.touched.email && Formik.errors.email ? (
            <Form.Text className="text-danger">{Formik.errors.email}</Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="text"
            placeholder="Mobile"
            name="mobile"
            onBlur={Formik.handleBlur}
            onChange={Formik.handleChange}
            value={Formik.values.mobile}
          />
          {Formik.touched.mobile && Formik.errors.mobile ? (
            <Form.Text className="text-danger">
              {Formik.errors.mobile}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Class</Form.Label>
          <Form.Control
            type="text"
            placeholder="Class"
            name="class"
            onBlur={Formik.handleBlur}
            onChange={Formik.handleChange}
            value={Formik.values.class}
          />
          {Formik.touched.class && Formik.errors.class ? (
            <Form.Text className="text-danger">{Formik.errors.class}</Form.Text>
          ) : null}
        </Form.Group>
        {id === "new" ? (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Update
          </Button>
        )}
      </Form>
    </div>
  );
}

export default AddStudents;
