import React, { useContext, useRef } from "react";
import { v4 as uuid } from "uuid";
import { TaskContext } from "../App";

const AddTaskModal = ({ addModalTask, setAddModalTask }) => {
  const { taskList, setTaskList } = useContext(TaskContext);

  const closeModal = useRef();
  const modalRef = useRef();

  function handleOnChange(e) {
    setAddModalTask({ ...addModalTask, [e.target.name]: e.target.value });
  }

  function onTaskSumbit(e) {
    e.preventDefault();
    localStorage.setItem("myTasks", JSON.stringify([{ id: uuid(), ...addModalTask }, ...taskList]));
    setTaskList([{ id: uuid(), ...addModalTask, isCompleted: false }, ...taskList]);
    setAddModalTask({});
    closeModal.current.click();
  }

  return (
    <div className="modal fade" id="addTaskModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title w-100 fs-2 text-center">Add Task</h5>
          </div>
          <form className="modal-body" onSubmit={onTaskSumbit}>
            <div className="mt-2">
              <label htmlFor="title" className="form-label fw-medium ms-1 mb-2">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                placeholder="Enter Title Here"
                value={addModalTask.title}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mt-3">
              <label htmlFor="description" className="form-label fw-medium ms-1 mb-2">
                Description
              </label>
              <textarea
                // type="text"
                className="form-control"
                placeholder="Enter Description Here"
                name="description"
                id="description"
                value={addModalTask.description}
                ref={modalRef}
                onChange={handleOnChange}
                rows={5}
                // style={{
                //   width: "100%", // Set the width to fill the container
                //   height: "100px", // Set a fixed height
                //   overflowY: "auto", // Show scrollbars when content exceeds the height
                // }}
                required
              />
            </div>
            <div className="modal-footer justify-content-center mt-3">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{ width: "120px" }}
                onClick={() => setAddModalTask({})}
                ref={closeModal}
              >
                Close
              </button>
              <button type="submit" className="btn btn-success" style={{ width: "120px" }}>
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
