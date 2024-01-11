export default function DashModal({ data }) {
  return (
    <>
      <div
        class="modal fade"
        id="editmodal"
        data-bs-backdrop="static"
        // data-bs-keyboard="false"
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
              <form>
                <div class="mb-2">
                  <label>AO :</label>
                  <input
                    type="text"
                    className="mt-1 form-control"
                    value={data.ao}
                  />
                </div>
                <div class="mb-2">
                  <label>Tugas :</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    value={data.tugas}
                  />
                </div>
                <div class="mb-2">
                  <label>Status :</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    value={data.status}
                  />
                </div>
                <div class="mb-2">
                  <label>Catatan : </label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    value={data.catatan}
                  />
                </div>
                <div class="mb-2">
                  <label>Dibuat Pada : </label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    value={data.dibuatpada}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
