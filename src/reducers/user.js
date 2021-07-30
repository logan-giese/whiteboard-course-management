const def = {
  email: "default@test.com",
  first_name: "Default",
  last_name: "User",
  role: "0",
};

const user = (state = def, action) => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.payload);
    case "LOGOUT":
      return (state = {});
    default:
      return state;
  }
};

export default user;
