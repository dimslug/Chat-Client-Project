import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function Logout({ setSessionToken }) {
  const navigate = useNavigate();

  const signout = () => {
    localStorage.removeItem("token"); // clears token in local storage
    setSessionToken(" "); // resets our state to an empty string
    navigate("/"); // routes us back to Auth
  };

  const style = {
    float: "right",
    margin: ".5em",
  };
  return (
    <>
      <Button color="danger" outline style={style} onClick={signout}>
        Log Out
      </Button>
    </>
  );
}

export default Logout;
