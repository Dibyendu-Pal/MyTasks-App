import React, { useContext, useRef } from "react";
import { TaskContext } from "../App";

const UpdateTaskModal = ({ updateModalTask, setUpdateModalTask }) => {
  const { taskList, setTaskList } = useContext(TaskContext);

  const closeModal = useRef();

  function handleOnChange(e) {
    setUpdateModalTask({ ...updateModalTask, [e.target.name]: e.target.value });
  }

  function onTaskUpdate(e) {
    e.preventDefault();
    setTaskList(
      taskList.map((task) => {
        if (task.id === updateModalTask.id) {
          task = updateModalTask;
        }
        return task;
      })
    );
    
    localStorage.setItem(
      "myTasks",
      JSON.stringify(
        JSON.parse(localStorage.getItem("myTasks")).map((task) => {
          if (task.id === updateModalTask.id) {
            task = updateModalTask;
          }
          return task;
        })
      )
    );
    closeModal.current.click();
  }
  return (
    <div className="modal fade" id="updateTaskModal" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title w-100 fs-2 text-center">Update Task</h5>
          </div>
          <form className="modal-body" onSubmit={onTaskUpdate}>
            <div className="mt-2">
              <label htmlFor="title" className="form-label fw-medium ms-1 mb-2">
                Title
              </label>
              <input type="text" className="form-control" name="title" id="title" value={updateModalTask.title} onChange={handleOnChange} required />
            </div>
            <div className="form-floating mt-3">
              <p htmlFor="description" className="form-label fw-medium ms-1 mb-2">
                Description
              </p>
              <textarea
                className="form-control"
                placeholder="Enter Description Here"
                name="description"
                id="description"
                value={updateModalTask.description}
                onChange={handleOnChange}
                style={{ minHeight: "150px" }}
                required
              />
            </div>
            <div className="modal-footer justify-content-center mt-3">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ width: "120px" }} ref={closeModal}>
                Close
              </button>
              <button type="submit" className="btn btn-warning" style={{ width: "120px" }}>
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTaskModal;
