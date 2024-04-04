import React, { useContext, useEffect, useState } from "react";
import { TaskContext, ThemeContext } from "../App";
import AddTaskModal from "../components/AddTaskModal";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import UpdateTaskModal from "../components/UpdateTaskModal";

const HomePage = () => {
  const { nightMode } = useContext(ThemeContext);

  const { taskList, setTaskList } = useContext(TaskContext);

  const [addModalTask, setAddModalTask] = useState({});
  const [updateModalTask, setUpdateModalTask] = useState({});
  const [deleteModalTask, setDeleteModalTask] = useState({});

  useEffect(() => {
    if (localStorage.getItem("myTasks") !== null) {
      setTaskList(JSON.parse(localStorage.getItem("myTasks")));
    }
  }, []);

  // On Clicking Complete Button ----- Toggle the isComplete filled of the Task

  function onCompleteTask(id) {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      })
    );

    localStorage.setItem(
      "myTasks",
      JSON.stringify(
        JSON.parse(localStorage.getItem("myTasks")).map((task) => {
          if (task.id === id) {
            task.isCompleted = !task.isCompleted;
          }
          return task;
        })
      )
    );
  }

  return (
    <div style={{ backgroundColor: `${nightMode ? "black" : "white"}`, minHeight: "calc(100vh - 60px)" }}>
      <h1 className={`text-center text-${nightMode ? "white" : "dark"} m-0 py-5`}>All Tasks at One Place</h1>

      {/* Add Task Button */}

      <div className="d-flex justify-content-end align-items-center mb-5" style={{ marginRight: "30px" }}>
        <button
          className="btn btn-success px-4"
          data-bs-toggle="modal"
          data-bs-target="#addTaskModal"
          onClick={() => setAddModalTask({ title: "", description: "" })}
        >
          <i className="fa-solid fa-plus me-2" style={{ color: "white" }}></i>
          Add Task
        </button>
      </div>

      {/* Displaying All Task From List */}

      {taskList !== null &&
        taskList.map((task) => (
          <div
            key={task.id}
            className="d-flex m-3 border border-3 p-3"
            style={{ cursor: "pointer", minHeight: "175px", backgroundColor: `${task.isCompleted ? "#6bef6b" : ""}` }}
          >
            {/* Title And Description */}
            <div className="pe-3" style={{ width: "80%", wordWrap: "break-word", color: `${nightMode ? "white" : "black"}` }}>
              <div className="text-justify mb-3 fw-bold fs-4">{task.title}</div>
              <div className="text-justify">{task.description}</div>
            </div>

            {/* Edit Delete Complete Button */}

            <div id="edit-delete-complete" className="d-flex align-items-center justify-content-end" style={{ width: "20%" }}>
              <i
                className="fa-solid fa-pen-to-square fa-lg mx-3"
                style={{ color: "#baba24" }}
                data-bs-toggle="modal"
                data-bs-target="#updateTaskModal"
                onClick={() => setUpdateModalTask(task)}
              ></i>
              <i
                className="fa-solid fa-trash fa-lg mx-3"
                data-bs-toggle="modal"
                data-bs-target="#deleteConfirmationModal"
                style={{ color: "red" }}
                onClick={() => setDeleteModalTask(task)}
              ></i>
              <i className="fa-solid fa-circle-check fa-lg mx-3" style={{ color: "green" }} onClick={() => onCompleteTask(task.id)}></i>
            </div>
          </div>
        ))}

      {/* Modals For Add Edit and Delete Task */}

      <AddTaskModal addModalTask={addModalTask} setAddModalTask={setAddModalTask} />
      <UpdateTaskModal updateModalTask={updateModalTask} setUpdateModalTask={setUpdateModalTask} />
      <DeleteConfirmationModal deleteModalTask={deleteModalTask} />
    </div>
  );
};

export default HomePage;
