import React from "react";
import { useState } from "react";
import Task1 from "./assets/component/task1/Task";
import Task2 from "./assets/component/Task2/Task2";
import Task3 from "./assets/component/Task3/Task3";
import Task5 from "./assets/component/Task5/Task5";

function App() {
  const [selected, setSelected] = useState("null");
  const renderComponent = () => {
    if (selected === "task1") {
      return <Task1 />;
    } else if (selected === "task2") {
      return <Task2 />;
    } else if (selected === "task3") {
      return <Task3 />;
    } 
    
    else if (selected === "task5") {
      return <Task5 />;
    } 
    else {
      return <div className="text-xl font-bold flex justify-center items-center">Please select a task</div>;
    }
  };
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center flex-col mt-24 bg-white mx-4 rounded-lg h-full">
          <div>
            <h1 className="text-4xl font-bold font-serif">My Tasks</h1>
          </div>
          <div className="mt-10 ">
            <button
              type="button"
              onClick={() => setSelected("task1")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-6"
            >
              Task1
            </button>
            <button
              type="button"
              onClick={() => setSelected("task2")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-6"
            >
              Task2
            </button>
            <button
              type="button"
              onClick={() => setSelected("task3")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-6"
            >
              Task3
            </button>
            
            <button
              type="button"
              onClick={() => setSelected("task5")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-6"
            >
              Task5
            </button>
          </div>
          <div className="h-[50%] w-[60%] mt-10 rounded-xl">
            {/* <Task1 /> */}
            {renderComponent()}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
