"use client";

import { useState } from "react";

const AddTaskModal = ({ closeModal }) => {
  const [task, setTask] = useState({
    title: "",
    tag: "",
    endDate: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task data:", task);
    // Add logic to store or send the task data here
    closeModal(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Add Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={task.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tag" className="block text-gray-700">
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              value={task.tag}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="endDate" className="block text-gray-700">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={task.endDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="details" className="block text-gray-700">
              Details
            </label>
            <textarea
              id="details"
              name="details"
              value={task.details}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md"
            >
              Add Task
            </button>
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-6 rounded-md"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
