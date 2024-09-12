import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import Task2 from "./Task2";
import fetchMock from "jest-fetch-mock";

// Enable fetch mocking
fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks(); 
});

// Test for the loading state
test("displays loading message while fetching data", () => {
  fetch.mockResponseOnce(() => new Promise(() => {}));
  render(<Task2 />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

// Test for successful data fetch
test("shows user names when data is fetched successfully", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      { id: 1, name: "Leanne Graham" },
      { id: 2, name: "Ervin Howell" },
    ])
  );

  render(<Task2 />);

  await waitFor(() => {
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.getByText("Ervin Howell")).toBeInTheDocument();
  });
});

// Test for error handling
test("shows error message if the API call fails", async () => {
  fetch.mockReject(new Error("Failed to fetch"));

  render(<Task2 />);

  await waitFor(() => {
    expect(screen.getByText("Error: Failed to fetch")).toBeInTheDocument();
  });
});
