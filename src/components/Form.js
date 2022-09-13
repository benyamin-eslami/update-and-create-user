import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/form-redux";

const initialValues = {
  firstname: "",
  lastname: "",
  age: "",
  haircolor: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "USER__INPUT":
      state = action.val;
      return state;
    case "USER__Update":
      state = action.val;
      return state;
    default:
      return {
        firstname: "",
        lastname: "",
        age: "",
        haircolor: "",
      };
  }
};
const Form = () => {
  const formEditingName = useSelector((state) => state.editingInfo.editingName);
  const formIsEditing = useSelector((state) => state.editingInfo.isEdit);
  const dispatchRedux = useDispatch();
  const [formState, dispatch] = useReducer(formReducer, initialValues);

  const firstNameHandler = (e) => {
    dispatch({
      type: "USER__INPUT",
      val: { ...formState, firstname: e.target.value },
    });
    formIsEditing &&
      dispatch({
        type: "USER__Update",
        val: { ...formState, firstname: e.target.value },
      });
  };
  const lastNameHandler = (e) => {
    dispatch({
      type: "USER__INPUT",
      val: { ...formState, lastname: e.target.value },
    });
    formIsEditing &&
      dispatch({
        type: "USER__Update",
        val: { ...formState, lastname: e.target.value },
      });
  };
  const ageHandler = (e) => {
    dispatch({
      type: "USER__INPUT",
      val: { ...formState, age: e.target.value },
    });
    formIsEditing &&
      dispatch({
        type: "USER__Update",
        val: { ...formState, age: e.target.value },
      });
  };
  const hairColorHandler = (e) => {
    dispatch({
      type: "USER__INPUT",
      val: { ...formState, haircolor: e.target.value },
    });
    formIsEditing &&
      dispatch({
        type: "USER__Update",
        val: { ...formState, haircolor: e.target.value },
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    !formIsEditing && dispatchRedux(formActions.formUpdated(formState));
    formIsEditing && console.log(formState);
    formIsEditing && dispatchRedux(formActions.formEdited(formState));
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">firstname</label>
      <input onChange={firstNameHandler} id="firstname" type="text" />
      <label htmlFor="lastname">lastname</label>
      <input onChange={lastNameHandler} id="lastname" type="text" />
      <label htmlFor="age">age</label>
      <input onChange={ageHandler} id="age" type="text" />
      <label htmlFor="haircolor">haircolor</label>
      <input onChange={hairColorHandler} id="haircolor" type="text" />
      <button type="submit">{formIsEditing ? "updated" : "submit"}</button>
    </form>
  );
};

export default Form;
