import { createSlice } from "@reduxjs/toolkit";

const toggleReducer = createSlice({
    name: "toggleReducer",
    initialState: {
        isPackagePhoto: false
    },
    reducers: {
        setIsPackagePhoto: (state, action) => {
            state.isPackagePhoto = action.payload;
        }
    },
});

export const { setIsLogin, setIsRegister, setIsPackagePhoto } =
    toggleReducer.actions;

export default toggleReducer.reducer;
