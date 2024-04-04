import React, { useContext, useRef } from "react";
import { TaskContext } from "../App";

const DeleteConfirmationModal = ({ deleteModalTask }) => {
  const { taskList, setTaskList } = useContext(TaskContext);

  const closeModal = useRef();

  function onDeleteClick() {
    setTaskList(taskList.filter((task) => task.id !== deleteModalTask.id));
    localStorage.setItem("myTasks", JSON.stringify(JSON.parse(localStorage.getItem("myTasks")).filter((task) => task.id !== deleteModalTask.id)));
    closeModal.current.click();
  }
  return (
    <div
      className="modal fade"
      id="deleteConfirmationModal"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header text-center d-block pt-5">
            <i className="fa-solid fa-trash mb-4" style={{ color: "red", fontSize: "100px" }}></i>
            <h2>Delete Confirmation !!</h2>
          </div>
          <div className="modal-body text-center">Task : {deleteModalTask.title}</div>
          <div className="modal-footer justify-content-center">
            <button type="button" className="btn btn-secondary m-3" data-bs-dismiss="modal" style={{ width: "120px" }} ref={closeModal}>
              Close
            </button>
            <button type="button" className="btn btn-danger m-3" onClick={onDeleteClick} style={{ width: "120px" }}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
