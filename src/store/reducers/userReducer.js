const userReducer = (users = [], action) => {
  switch (action.type) {
    case "GET_USERS":
      return action.user.data.user;
    case "ADD_USER":
      return action.user.data;
    default:
      return users;
    case "UPDATE_USER":
      return action.user.data;
    case "FINDBYID_USER":
      return action.findByIduser.data;
    case "DELETE_USER":
      return action.deleteuser.data;
      // return users.filter((e) => e._id !== action.id);
  }
};

export default userReducer;
