import React from "react";
import { useState, useEffect } from "react";

function Task3() {
  const [arrayInput, setArrayInput] = useState("");
  const [inputArray, setInputArray] = useState([]);
  const [longestChainLength, setLongestChainLength] = useState(0);

  function longestChain(array) {
    if (array.length === 0) {
      return 0;
    }

    let longestChain = 1;
    let currentChain = 1;

    for (let i = 1; i < array.length; i++) {
      if (array[i] === array[i - 1] + 1) {
        currentChain++;
      } else {
        currentChain = 1;
      }
      longestChain = Math.max(longestChain, currentChain);
    }

    return longestChain;
  }
  
  const handleInputChange = (e) => {
    setArrayInput(e.target.value);
  };
  const handleSubmit = () => {
    const parsedArray = arrayInput
      .split(",")
      .map(Number)
      .filter((num) => !isNaN(num));

    setInputArray(parsedArray);
  };

  useEffect(() => {
    if (inputArray.length > 0) {
      const result = longestChain(inputArray);
      setLongestChainLength(result);
    }
  }, [inputArray]);

  return (
    <div>
      <div className="border-3 border-red-400 flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold">Longest Consecutive Chain</h1>
        <input
          className="h-12 w-[45%] border-2 border-gray-500 rounded-xl mt-4 p-4 text-xl "
          type="text"
          value={arrayInput}
          onChange={handleInputChange}
          placeholder="Enter numbers separated by commas"
        />
        <button
          className=" m-5 px-3 py-2 bg-blue-500 rounded-xl text-xl font-bold  text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>

        {inputArray.length > 0 && (
          <div>
            <p className="text-xl">Input Array: {inputArray.join(", ")}</p>
            <h2 className="text-xl font-bold">
              Longest Consecutive Chain: {longestChainLength}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Task3;
