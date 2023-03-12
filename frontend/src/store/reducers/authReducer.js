import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const customerToken = localStorage.getItem("login-token");

function verifyToken(keyname) {
  const storage = localStorage.getItem(keyname);
  if (storage) {
    const decodeToken = jwtDecode(storage);
    const expiresIn = new Date(decodeToken.exp * 1000);
    if (new Date() > expiresIn) {
      localStorage.removeItem(keyname);
      return null;
    } else {
      return storage;
    }
  } else {
    return null;
  }
}

const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    adminToken: verifyToken("admin-token"),
    userToken: verifyToken("login-token"),
    user: customerToken ? jwtDecode(customerToken) : null,
  },
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
      state.user = jwtDecode(action.payload);
    },
    logout: (state, { payload }) => {
      localStorage.removeItem(payload);
      if (payload === "admin-token") {
        state.adminToken = null;
      } else if (payload === "login-token") {
        state.user = null;
        state.userToken = null;
      }
    },
  },
});

export const { setAdminToken, setUserToken, logout } = authReducer.actions;

export default authReducer.reducer;
