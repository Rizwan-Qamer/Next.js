"use client";

import React from "react";
import TodoList from "../components/todo-list";

function Page() {
  return (
    <center>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">TODOS COMPONENTS</h1>
        <TodoList /> 
    </center>
  );
}

export default Page;
