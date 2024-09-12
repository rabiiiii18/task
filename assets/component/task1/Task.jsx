import React from "react";
import { useState } from "react";
import { products } from "../../../data";

function Task1() {
  const [Filter, setFilter] = useState("");
  return (
    <div>
      <div className="flex justify-center items-center mt-4 flex-col">
        <h1 className="mb-2 text-2xl font-bold">Search Filter App</h1>
        <input
          className="h-12 w-[45%] border-2 border-gray-500 rounded-xl p-4 text-xl "
          type="text"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          placeholder="Type to search"
        />
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left  text-white ">
            <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Brand
                </th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((item) => {
                  return item.name.toLowerCase().includes(Filter);
                })
                .map((item) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={item.id}
                  >
                    <td className="px-6 py-3">{item.id}</td>
                    <td className="px-6 py-3">{item.name}</td>
                    <td className="px-6 py-3">{item.category}</td>
                    <td className="px-6 py-3">Rs. {item.price}</td>
                    <td className="px-6 py-3">{item.rating}</td>
                    <td className="px-6 py-3">{item.stock}</td>
                    <td className="px-6 py-3">{item.brand}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Task1;
