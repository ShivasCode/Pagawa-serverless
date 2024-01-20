const initialState = {
  access:
    typeof window !== "undefined"
      ? window.localStorage.getItem("access")
      : false,
  refresh:
    typeof window !== "undefined"
      ? window.localStorage.getItem("refresh")
      : false,
  isAuthenticated: null,
  user: null,
};

export default initialState;
