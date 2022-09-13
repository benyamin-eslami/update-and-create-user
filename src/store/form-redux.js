import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialFormObj = {
  obj: [],
  editingInfo: { isEdit: false, editingName: "" },
};

const formSlice = createSlice({
  name: "form",
  initialState: initialFormObj,
  reducers: {
    formUpdated(state, action) {
      state.obj.push(action.payload);
    },
    formEdit(state) {
      state.editingInfo.isEdit = !state.editingInfo.isEdit;
    },
    formEditName(state, action) {
      state.editingInfo.editingName = action.payload;
    },
    formEdited(state, action) {
      state.obj.forEach((info) => {
        if (info.firstname === state.editingInfo.editingName) {
          info.firstname = action.payload.firstname;
          info.lastname = action.payload.lastname;
          info.age = action.payload.age;
          info.haircolor = action.payload.haircolor;
        }
      });
      state.editingInfo.isEdit = !state.editingInfo.isEdit;
    },
  },
});

const store = configureStore({
  reducer: formSlice.reducer,
});

export const formActions = formSlice.actions;

export default store;
