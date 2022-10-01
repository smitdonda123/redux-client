import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { getUser, deleteUser } from "../store/actions/userActions";

function AllStudents() {
  const dispatch = useDispatch();

  let usersData = useSelector((state) => state?.users);
  console.log(usersData);
  

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // DELETE
  let handleDelete = async (id) => {
    try {
      dispatch(deleteUser(id));
      dispatch(getUser());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData
            ? usersData.map((e, id) => {
                return (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.class}</td>
                    <td>
                      <Link to={`/add-student/${e._id}`}>
                        <Button variant="primary">Edit</Button>
                      </Link>
                      <span>&nbsp; &nbsp;</span>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(e._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </>
  );
}

export default AllStudents;
