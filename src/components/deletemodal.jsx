import React from "react";

export default function DeleteModal(props) {
  const dispatch = props.dispatch;
  const removeData = props.removeData;

  const deleteData = () => {
    dispatch(removeData(""));
    window.location.reload();
  };

  return (
    <div
      class="modal fade"
      id="deletemodal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Edit Row
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Apakah anda yakin akan membatalkan transaksi ?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => deleteData()}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
