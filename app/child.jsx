import React from "react";
// import { useGlobalContext } from "./components/usecontext/userContext";
import { useContext } from "react";
import { AppContext } from "./components/useContext/userContext";

const Child = () => {
  const userData = useContext(AppContext);
  return (
    <div>
      Child = My name is {userData.name} and my age is {userData.age}.{" "}
    </div>
  );
};

export default Child;