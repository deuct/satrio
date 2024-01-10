export default function Dashboard() {
  return (
    <>
      <div className="user-top d-block shadow p-3 mb-3 bg-body-tertiary rounded">
        <div className="d-flex justify-content-between">
          <div className="text-start">Wed, 11 July 2022, 19:00:00</div>
          <div className="text-end">
            <i class="bi bi-person-fill me-1"></i> Muhammad Satrio Pamungkas
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="d-block h-100 w-100 shadow py-4 px-3 mb-3 bg-body-tertiary rounded">
            <div className="d-flex justify-content-between">
              <div className="text-start d-block w-80">
                <h4 style={{ fontWeight: "600", color: "green" }}>
                  Welcome Muhammad Satrio Pamungkas!
                </h4>
                <span className="d-block mb-2">
                  You have 10 works todo! Check your tickets in your profile.
                  Keep up the good work!
                </span>
                <button class="btn btn-outline-success btn-sm">
                  View Tickets
                </button>
              </div>
              <div className="text-end d-block w-20">
                <img
                  src={require("../assets/people-work-2.png")}
                  alt="person-work"
                  className="d-block"
                  width={"250px"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="d-flex justify-content-between h-100">
            <div className="d-inline-block w-50 h-100 shadow py-4 px-3 mx-1 mb-3 bg-body-tertiary rounded">
              <span className="fs-6 d-block">UMKM Loans</span>
              <span className="d-block fs-5">Rp. 123.456.789</span>
              <span className="fs-5"> +72.80%</span>
            </div>
            <div className="d-inline-block w-50 h-100 shadow py-4 px-3 mx-1 mb-3 bg-body-tertiary rounded">
              <span className="fs-6 d-block">UMKM Loans</span>
              <span className="d-block fs-5">Rp. 123.456.789</span>
              <span className="fs-5"> +72.80%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="d-block h-100 w-100 shadow py-4 px-3 mb-3 bg-body-tertiary rounded ">
            <div className="d-flex">
              <div className="w-75">
                <table className="satrio-table table table-bordered w-100">
                  <thead>
                    <tr>
                      <td>AO</td>
                      <td>Total Pengajuan</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Muhammad Satrio Pamungkas</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Muhammad Taufik Fiqri</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Muhammad Iqbal Setiawan</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>Tafarel Agustino</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="ao-ter w-25 text-center">
                <span>AO Terbaik</span>
                <i class="bi bi-person-fill"></i>
                <span>Muhammad Satrio Pamungkas</span>
                <span>Total 10 Pengajuan</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="d-flex justify-content-between">
            <div className="d-block w-50 shadow py-4 px-3 mx-1 mb-3 bg-body-tertiary rounded">
              <span className="fs-4 d-block">UMKM Loans</span>
              <span className="d-block">Rp. 123.456.789</span>
              <span className="fs-3"> +72.80%</span>
            </div>
            <div className="d-block w-50 shadow py-4 px-3 mx-1 mb-3 bg-body-tertiary rounded">
              <span className="fs-4 d-block">UMKM Loans</span>
              <span className="d-block">Rp. 123.456.789</span>
              <span className="fs-3 d-block"> +72.80%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
