import React, { useContext } from "react";
import { ThemeContext } from "../App";

const AboutPage = () => {
  const { nightMode } = useContext(ThemeContext);

  return (
    <div
      className="px-4"
      style={{ backgroundColor: `${nightMode ? "black" : "white"}`, minHeight: "calc(100vh - 60px)", color: `${nightMode ? "white" : "black"}` }}
    >
      <h1 className={`text-center  m-0 py-5`}>About</h1>

      <p className="text-justify">
        <span className="fw-bold fs-2 me-2">Welcome</span>
        to our Task Management Application! Our task app is designed to streamline your daily tasks and enhance your productivity. Whether you're
        organizing personal chores or managing team assignments, our intuitive interface and robust features ensure you stay on top of your tasks
        effortlessly.
      </p>
      <h3 className="my-5">Key Features</h3>

      {/* Features List */}
      <ul>
        <li className="text-justify">
          <span className="fw-bold me-2">Add Task:</span> Quickly add new tasks by entering a title ,description and hitting the
          <span className="mx-3">
            <button className="btn btn-success px-4">
              <i className="fa-solid fa-plus me-2" style={{ color: "white" }}></i>
              Add Task
            </button>
          </span>
          button. Tasks are added instantly to your list for easy tracking.
        </li>
        <li className="text-justify my-4">
          <span className="fw-bold me-2">Edit Task:</span> Need to make changes to a task? No problem! Simply click the
          <i className="fa-solid fa-pen-to-square fa-lg mx-3" style={{ color: "#baba24" }}></i>button, make your edits, and save. It's that simple..
        </li>
        <li className="text-justify my-4">
          <span className="fw-bold me-2">Delete Task:</span> Remove unwanted tasks effortlessly with the
          <i className="fa-solid fa-trash fa-lg mx-3" style={{ color: "red" }}></i>button. Say goodbye to clutter and maintain a clean task list at
          all times.
        </li>
        <li className="text-justify my-4">
          <span className="fw-bold me-2">Mark as Completed:</span> Keep track of your progress by marking tasks as completed. A
          <i className="fa-solid fa-circle-check fa-lg mx-3" style={{ color: "green" }}></i>next to each task allows you to toggle completion status
          with a single click.
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
