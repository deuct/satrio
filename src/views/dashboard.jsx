// import { useState, useEffect } from "react";
import React from "react";
import { useEffect, useState } from "react";
import DashModal from "../components/dashmodal";
import { useSelector, useDispatch } from "react-redux";
import { removeData } from "../features/sliceAo";

export default function Dashboard() {
  const [selectedAO, setSelectedAO] = useState([]);
  const [arrAO, setArrAO] = useState(
    useSelector((state) => state.sliceAo.value)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(selectedAO);
    dispatch(removeData(selectedAO.id));
  }, [selectedAO]);

  const deleteData = () => {
    setArrAO((sel) => sel.filter((selao) => selao.id !== selectedAO.id));
    let delData = arrAO.filter((selao) => selao.id !== selectedAO.id);
    dispatch(removeData(delData));
  };

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
              <div className="d-block text-success fs-3 fw-bold">
                <i class="bi bi-credit-card"></i>
              </div>
              <span className="fs-6 d-block">UMKM Loans</span>
              <span className="d-block fs-5">Rp. 123.456.789</span>
              <span className="fs-5 text-success">
                <i class="bi bi-arrow-up"></i> +72.80%
              </span>
            </div>
            <div className="d-inline-block w-50 h-100 shadow py-4 px-3 mx-1 mb-3 bg-body-tertiary rounded">
              <div className="d-block text-warning fs-3 fw-bold">
                <i class="bi bi-credit-card"></i>
              </div>
              <span className="fs-6 d-block">KPR Loans</span>
              <span className="d-block fs-5">Rp. 123.456.789</span>
              <span className="fs-5 text-success">
                <i class="bi bi-arrow-up"></i> +72.80%
              </span>
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
                <i class="bi bi-person-fill fs-1"></i>
                <span className="fs-6">Muhammad Satrio Pamungkas</span>
                <span className="fs-6">Total 10 Pengajuan</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="d-flex justify-content-between h-100">
            <div className="d-inline-block w-50 h-100 shadow py-4 px-3 mx-1 mb-3 bg-body-tertiary rounded">
              <div className="d-block text-success fs-3 fw-bold">
                <i class="bi bi-credit-card"></i>
              </div>
              <span className="fs-6 d-block">UMKM Loans</span>
              <span className="d-block fs-5">Rp. 123.456.789</span>
              <span className="fs-5 text-danger">
                <i class="bi bi-arrow-down"></i> -14.80%
              </span>
            </div>
            <div className="d-inline-block w-50 h-100 shadow py-4 px-3 mx-1 mb-3 bg-body-tertiary rounded">
              <div className="d-block text-warning fs-3 fw-bold">
                <i class="bi bi-credit-card"></i>
              </div>
              <span className="fs-6 d-block">KPR Loans</span>
              <span className="d-block fs-5">Rp. 123.456.789</span>
              <span className="fs-5 text-success">
                <i class="bi bi-arrow-up"></i> +72.80%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-block h-100 w-100 shadow py-4 px-3 mb-3 bg-body-tertiary rounded">
            <table className="satrio-table table table-bordered w-100">
              <thead>
                <tr>
                  <td>No. Aplikasi</td>
                  <td>AO</td>
                  <td>Jenis Nasabah</td>
                  <td>Plafon</td>
                  <td>Status Aplikasi</td>
                  <td>Kelengkapan Dokumen</td>
                  <td>Dibuat Pada</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Muhammad Satrio</td>
                  <td>Lembaga</td>
                  <td>Rp. 2.000.000</td>
                  <td>Disetujui</td>
                  <td>Lengkap</td>
                  <td>9 Februari 2023</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Muhammad Taufik</td>
                  <td>Perorangan</td>
                  <td>Rp. 33.005.747.45</td>
                  <td>Unggah Dokumen</td>
                  <td>Belum Lengkap</td>
                  <td>10 Februari 2023</td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>Muhammad Iqbal</td>
                  <td>Lembaga</td>
                  <td>Rp. 33.005.747.45</td>
                  <td>DIsetujui</td>
                  <td>Lengkap</td>
                  <td>11 Februari 2023</td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>Tafarel Agustina</td>
                  <td>Perorangan</td>
                  <td>Rp. 33.005.747.45</td>
                  <td>Dokumen Review</td>
                  <td>Sedang Direview</td>
                  <td>20 Februari 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-block h-100 w-100 shadow py-4 px-3 mb-3 bg-body-tertiary rounded">
            <table className="satrio-table table table-bordered w-100">
              <thead>
                <tr>
                  <td>No</td>
                  <td>AO</td>
                  <td>Tugas</td>
                  <td>Status</td>
                  <td>Catatan</td>
                  <td>Dibuat Pada</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                {arrAO.map((item) => {
                  return (
                    <tr>
                      <td>{item.no}</td>
                      <td>{item.ao}</td>
                      <td>{item.tugas}</td>
                      <td>{item.status}</td>
                      <td>{item.catatan}</td>
                      <td>{item.dibuatpada}</td>
                      <td className="text-center">
                        <button
                          id={item.id}
                          type="button"
                          className="btn btn-link text-primary fw-bold fs-6"
                          onClick={(e) => {
                            setSelectedAO(
                              arrAO.find((obj) => obj.id == e.target.id)
                            );
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#editmodal"
                        >
                          UBAH
                        </button>
                        <button
                          id={item.id}
                          type="button"
                          className="btn btn-link text-danger fw-bold fs-6"
                          onClick={(e) => {
                            setSelectedAO(
                              arrAO.find((obj) => obj.id == e.target.id)
                            );
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#deletemodal"
                        >
                          HAPUS
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="deletemodal"
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
              Apakah anda yakin ingin menghapus data ini ?
              <br /> Nama AO : {selectedAO.ao}
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
                class="btn btn-success"
                data-bs-dismiss="modal"
                onClick={() => deleteData()}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

      <DashModal data={selectedAO !== undefined ? selectedAO : ""} />
    </>
  );
}
