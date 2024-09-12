import React, { useState } from "react";

function Task5() {
  const [arrayInput, setArrayInput] = useState(""); 
  const [counts, setCounts] = useState([]);         


  function countSmaller(nums) {
    const counts = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
          counts[i]++;
        }
      }
    }
    return counts;
  }

  const handleInputChange = (e) => {
    setArrayInput(e.target.value);
  };


  const handleCount = () => {

    const parsedArray = arrayInput
      .split(",")               
      .map(Number)              
      .filter((num) => !isNaN(num)); 

    // Now use the parsedArray to calculate the counts
    const result = countSmaller(parsedArray);
    setCounts(result);
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-4 flex-col">
        <h1 className="mb-2 text-2xl font-bold">
          Count Smaller Numbers to the Right
        </h1>
        <input
          className="h-12 w-[45%] border-2 border-gray-500 rounded-xl mt-4 p-4 text-xl "
          type="text"
          value={arrayInput}
          onChange={handleInputChange}
          placeholder="Enter numbers separated by commas"
        />
        <button
          className=" m-5 px-3 py-2 bg-blue-500 rounded-xl text-xl font-bold text-white"
          onClick={handleCount}
        >
          Count
        </button>
      </div>

      {counts.length > 0 && (
        <div className="flex justify-center items-center">
          <p className="text-xl font-bold">Counts: {counts.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default Task5;
