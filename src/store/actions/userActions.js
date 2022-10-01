import axios from "axios";

const URL = "http://localhost:4000/users";

export const addUser = (newuser) => {

  return async (dispatch, getState) => {
    try {
      let user = await axios.post(`${URL}/user-data`, newuser);
      dispatch({
        type: "ADD_USER",
        user,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUser = () => {
  return async (dispatch, getState) => {
    try {
      let user = await axios.get(`${URL}/user-data`);
      dispatch({
        type: "GET_USERS",
        user,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateUser = (upadteUser, id) => {
    console.log(upadteUser)
    console.log(id)

  return async (dispatch) => {
    try {
      let user = await axios.put(`${URL}/user-data/${id}`, upadteUser);
      dispatch({
        type: "UPDATE_USER",
        user,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const findByIdUser = (id) => {
    return async (dispatch) => {
      try {
        let findByIduser = await axios.get(`${URL}/user-data/${id}`);
        dispatch({
          type: "FINDBYID_USER",
          findByIduser,
        });
      } catch (err) {
        console.log(err);
      }
    };
  };

  export const deleteUser = (id) => {
    return async (dispatch) => {
      try {
      let deleteuser =  await axios.delete(`${URL}/user-data/${id}`);
      console.log(deleteuser);
        dispatch({
          type: "DELETE_USER",
          deleteuser,
        });
      } catch (err) {
        console.log(err);
      }
    };
  };
