import { useSelector, useDispatch } from "react-redux";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { formActions } from "../store/form-redux";
const UsersList = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.obj);
  const formIsEditing = useSelector((state) => state.editingInfo.isEdit);
  const formEditingName = useSelector((state) => state.editingInfo.editingName);

  const editHandler = (e, firstname) => {
    dispatch(formActions.formEdit());
    dispatch(formActions.formEditName(firstname));
  };
  return (
    <>
      {formData.length !== 0 &&
        formData.map((info) => {
          return (
            <div
              key={Math.random()}
              style={{ backgroundColor: "black", color: "white" }}
            >
              <CardContent sx={{ my: 3 }}>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  firstname:{info.firstname}
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  lastname:{info.lastname}
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  age:{info.age}
                  <br />
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  haircolor:{info.haircolor}
                  <br />
                </Typography>
              </CardContent>
              <Button
                onClick={(e) => {
                  editHandler(e, info.firstname);
                }}
                variant="contained"
              >
                {formIsEditing && formEditingName === info.firstname
                  ? "cancel Editing"
                  : "Edit"}
              </Button>
            </div>
          );
        })}
    </>
  );
};
export default UsersList;
