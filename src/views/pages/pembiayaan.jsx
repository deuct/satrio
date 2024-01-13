import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Usertop from "../../components/usertop";
import { saveData, removeData } from "../../features/slicePembiayaan";
import DeleteModal from "../../components/deletemodal";

export default function Pembiayaan() {
  const dispatch = useDispatch();

  const [noAplikasi, setNoAplikasi] = useState(
    useSelector((state) => state.slicePembiayaan.value.penyaringan.noaplikasi)
  );
  const [jenisNasabah, setJenisNasabah] = useState(
    useSelector((state) => state.slicePembiayaan.value.penyaringan.jenisNasabah)
  );
  const [NIK, setNIK] = useState(
    useSelector((state) => state.slicePembiayaan.value.penyaringan.NIK)
  );
  const [produkPembiayaan, setProdukPembiayaan] = useState(
    useSelector(
      (state) => state.slicePembiayaan.value.penyaringan.produkPembiayaan
    )
  );
  const [namaNasabah, setNamaNasabah] = useState(
    useSelector((state) => state.slicePembiayaan.value.penyaringan.namaNasabah)
  );
  const [tglPermintaan, setTglPermintaan] = useState(
    useSelector(
      (state) => state.slicePembiayaan.value.penyaringan.tanggalPermintaan
    )
  );
  const [NPWP, setNPWP] = useState(
    useSelector((state) => state.slicePembiayaan.value.penyaringan.NPWP)
  );

  const [namaPemohon, setNamaPemohon] = useState(
    useSelector((state) => state.slicePembiayaan.value.slikreview.namaPemohon)
  );
  const [noIdentitas, setNoIdentitas] = useState(
    useSelector((state) => state.slicePembiayaan.value.slikreview.noIdentitas)
  );
  const [jenisKelamin, setJenisKelamin] = useState(
    useSelector((state) => state.slicePembiayaan.value.slikreview.jenisKelamin)
  );
  const [tempatLahir, setTempatLahir] = useState(
    useSelector((state) => state.slicePembiayaan.value.slikreview.tempatLahir)
  );
  const [tglLahir, setTglLahir] = useState(
    useSelector((state) => state.slicePembiayaan.value.slikreview.tglLahir)
  );
  const [informasiSlik, setInformasiSlik] = useState(
    useSelector((state) => state.slicePembiayaan.value.slikreview.informasiSlik)
  );
  const [noLaporan, setNoLaporan] = useState(
    useSelector((state) => state.slicePembiayaan.value.slikreview.noLaporan)
  );
  const [tglPermintaanSlik, setTglPermintaanSlik] = useState(
    useSelector(
      (state) => state.slicePembiayaan.value.slikreview.tglPermintaanSlik
    )
  );
  const [bakiDebet, setBakiDebet] = useState(
    useSelector((state) => state.slicePembiayaan.value.slikreview.bakiDebet)
  );

  const [fileSlipGaji, setFileSlipGaji] = useState([]);
  const [fileKartuKeluarga, setFileKartuKeluarga] = useState([]);
  const [fileKartuPegawai, setFileKartuPegawai] = useState([]);
  const [fileSkPengangkatan, setFileSkPengangkatan] = useState([]);
  const [fileSertProfesi, setFileSertProfesi] = useState([]);
  const [fileSuratPersPas, setFileSuratPersPas] = useState([]);
  const [fileBukuTabungan, setFileBukuTabungan] = useState([]);
  const [fileKartuAtm, setFileKartuAtm] = useState([]);
  const [fileFotoInstitusi, setFileFotoInstitusi] = useState([]);
  const [fileFotoNasabah, setFileFotoNasabah] = useState([]);
  const [fileFotoAtasan, setFileFotoAtasan] = useState([]);
  const [fileRekomKepsek, setFileRekomKepsek] = useState([]);
  const [fileRekomKorwil, setFileRekomKorwil] = useState([]);
  const [fileJaminan, setFileJaminan] = useState([]);
  const [fileAtmNasabah, setFileAtmNasabah] = useState([]);
  const [fileJaminanAjb, setFileJaminanAjb] = useState([]);
  const [fileJaminanBpkb, setFileJaminanBpkb] = useState([]);
  const [fileJaminanShm, setFileJaminanShm] = useState([]);
  const [fileSertifikasiProf, setFileSertifikasiProf] = useState([]);
  const [fileJamLain, setFileJamLain] = useState([]);

  const btnPenyaringan = useRef(null);
  const btnSlikUpload = useRef(null);
  const btnSlikReview = useRef(null);
  const btnUnggahDok = useRef(null);

  const triggerSlikUpload = () => {
    btnSlikUpload.current.click();
  };
  const triggerSlikReview = () => {
    btnSlikReview.current.click();
  };
  const triggerUnggahDok = () => {
    btnUnggahDok.current.click();
  };

  const handleSubmitPenyaringan = () => {
    console.log(noAplikasi);
    const data = {
      action: "submitPenyaringan",
      data: {
        noaplikasi: noAplikasi,
        jenisNasabah: jenisNasabah,
        NIK: NIK,
        produkPembiayaan: produkPembiayaan,
        namaNasabah: namaNasabah,
        tanggalPermintaan: tglPermintaan,
        NPWP: NPWP,
      },
    };

    dispatch(saveData(data));
  };

  const handleSubmitSlikReview = () => {
    const data = {
      action: "submitSlikReview",
      data: {
        namaPemohon: namaPemohon,
        noIdentitas: noIdentitas,
        jenisKelamin: jenisKelamin,
        tempatLahir: tempatLahir,
        tglLahir: tglLahir,
        informasiSlik: informasiSlik,
        noLaporan: noLaporan,
        tglPermintaanSlik: tglPermintaanSlik,
        bakiDebet: bakiDebet,
      },
    };

    dispatch(saveData(data));
  };

  const deleteArr = (name, id) => {
    let array;
    let index;
    if (name == "fileSlipGaji") {
      array = [...fileSlipGaji];
      if (index !== -1) {
        array.splice(id, 1);
        setFileSlipGaji(array);
      }
    } else if (name == "fileKartuKeluarga") {
      array = [...fileKartuKeluarga];
      if (index !== -1) {
        array.splice(id, 1);
        setFileKartuKeluarga(array);
      }
    } else if (name == "fileKartuPegawai") {
      array = [...fileKartuPegawai];
      if (index !== -1) {
        array.splice(id, 1);
        setFileKartuPegawai(array);
      }
    } else if (name == "fileSkPengangkatan") {
      array = [...fileSkPengangkatan];
      if (index !== -1) {
        array.splice(id, 1);
        setFileSkPengangkatan(array);
      }
    } else if (name == "fileSertProfesi") {
      array = [...fileSertProfesi];
      if (index !== -1) {
        array.splice(id, 1);
        setFileSertProfesi(array);
      }
    } else if (name == "fileSuratPersPas") {
      array = [...fileSuratPersPas];
      if (index !== -1) {
        array.splice(id, 1);
        setFileSuratPersPas(array);
      }
    } else if (name == "fileBukuTabungan") {
      array = [...fileBukuTabungan];
      if (index !== -1) {
        array.splice(id, 1);
        setFileBukuTabungan(array);
      }
    } else if (name == "fileKartuAtm") {
      array = [...fileKartuAtm];
      if (index !== -1) {
        array.splice(id, 1);
        setFileKartuAtm(array);
      }
    } else if (name == "fileFotoInstitusi") {
      array = [...fileFotoInstitusi];
      if (index !== -1) {
        array.splice(id, 1);
        setFileFotoInstitusi(array);
      }
    } else if (name == "fileFotoNasabah") {
      array = [...fileFotoNasabah];
      if (index !== -1) {
        array.splice(id, 1);
        setFileFotoNasabah(array);
      }
    } else if (name == "fileFotoAtasan") {
      array = [...fileFotoAtasan];
      if (index !== -1) {
        array.splice(id, 1);
        setFileFotoAtasan(array);
      }
    } else if (name == "fileRekomKepsek") {
      array = [...fileRekomKepsek];
      if (index !== -1) {
        array.splice(id, 1);
        setFileRekomKepsek(array);
      }
    } else if (name == "fileRekomKorwil") {
      array = [...fileRekomKorwil];
      if (index !== -1) {
        array.splice(id, 1);
        setFileRekomKorwil(array);
      }
    } else if (name == "fileJaminan") {
      array = [...fileJaminan];
      if (index !== -1) {
        array.splice(id, 1);
        setFileJaminan(array);
      }
    } else if (name == "fileAtmNasabah") {
      array = [...fileAtmNasabah];
      if (index !== -1) {
        array.splice(id, 1);
        setFileAtmNasabah(array);
      }
    } else if (name == "fileJaminanAjb") {
      array = [...fileJaminanAjb];
      if (index !== -1) {
        array.splice(id, 1);
        setFileJaminanAjb(array);
      }
    } else if (name == "fileJaminanBpkb") {
      array = [...fileJaminanBpkb];
      if (index !== -1) {
        array.splice(id, 1);
        setFileJaminanBpkb(array);
      }
    } else if (name == "fileJaminanShm") {
      array = [...fileJaminanShm];
      if (index !== -1) {
        array.splice(id, 1);
        setFileJaminanShm(array);
      }
    } else if (name == "fileSertifikasiProf") {
      array = [...fileSertifikasiProf];
      if (index !== -1) {
        array.splice(id, 1);
        setFileSertifikasiProf(array);
      }
    } else if (name == "fileJamLain") {
      array = [...fileJamLain];
      if (index !== -1) {
        array.splice(id, 1);
        setFileJamLain(array);
      }
    }
  };

  return (
    <>
      <Usertop />

      <div className="row mb-2">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-block shadow p-3 mb-3 bg-body-tertiary rounded">
            <h2>DETAIL AO</h2>
            <div className="row mt-3 mb-2">
              <div className="col">
                <label>Nama AO</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama AO"
                />
              </div>
              <div className="col">
                <label>Nama Cabang</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama Cabang"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Kode AO</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Kode AO"
                />
              </div>
              <div className="col">
                <label>Kode Cabang</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Kode Cabang"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-start">
        <div className="col-lg-10 col-md-10 col-sm-12">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="tab-penyaringan-awal"
                data-bs-toggle="pill"
                data-bs-target="#penyaringan-awal"
                type="button"
                role="tab"
                aria-controls="penyaringan-awal"
                aria-selected="true"
                ref={btnPenyaringan}
              >
                Penyaringan Awal
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab-slik-upload"
                data-bs-toggle="pill"
                data-bs-target="#slik-upload"
                type="button"
                role="tab"
                aria-controls="slik-upload"
                aria-selected="false"
                ref={btnSlikUpload}
                // onClick={handleClick}
              >
                SLIK Upload
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab-slik-review"
                data-bs-toggle="pill"
                data-bs-target="#slik-review"
                type="button"
                role="tab"
                aria-controls="slik-review"
                aria-selected="false"
                // onClick={handleClick}
                ref={btnSlikReview}
              >
                SLIK Review
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab-unggah-dokumen"
                data-bs-toggle="pill"
                data-bs-target="#unggah-dokumen"
                type="button"
                role="tab"
                aria-controls="unggah-dokumen"
                aria-selected="false"
                ref={btnUnggahDok}
              >
                Unggah Dokumen
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab-empty-pills"
                data-bs-toggle="pill"
                data-bs-target="#empty-pills"
                type="button"
                role="tab"
                aria-controls="empty-pills"
                aria-selected="false"
              >
                Skema Pembiayaan
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab-empty-pills"
                data-bs-toggle="pill"
                data-bs-target="#empty-pills"
                type="button"
                role="tab"
                aria-controls="empty-pills"
                aria-selected="false"
              >
                Formulir Pengajuan
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab-empty-pills"
                data-bs-toggle="pill"
                data-bs-target="#empty-pills"
                type="button"
                role="tab"
                aria-controls="empty-pills"
                aria-selected="false"
              >
                BPRS Verifikasi
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab-empty-pills"
                data-bs-toggle="pill"
                data-bs-target="#empty-pills"
                type="button"
                role="tab"
                aria-controls="empty-pills"
                aria-selected="false"
              >
                Partner Verifikasi
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab-empty-pills"
                data-bs-toggle="pill"
                data-bs-target="#empty-pills"
                type="button"
                role="tab"
                aria-controls="empty-pills"
                aria-selected="false"
              >
                Persetujuan BPRS
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab-empty-pills"
                data-bs-toggle="pill"
                data-bs-target="#empty-pills"
                type="button"
                role="tab"
                aria-controls="empty-pills"
                aria-selected="false"
              >
                Persetujuan Partner
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab-empty-pills"
                data-bs-toggle="pill"
                data-bs-target="#empty-pills"
                type="button"
                role="tab"
                aria-controls="empty-pills"
                aria-selected="false"
              >
                Dokumen Entry
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab-empty-pills"
                data-bs-toggle="pill"
                data-bs-target="#empty-pills"
                type="button"
                role="tab"
                aria-controls="empty-pills"
                aria-selected="false"
              >
                Unduh dokumen
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade"
          id="empty-pills"
          role="tabpanel"
          aria-labelledby="tab-empty-pills"
          tabindex="0"
        >
          <div className="row mb-2">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-block shadow bg-body-tertiary rounded">
                Empty
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade show active"
          id="penyaringan-awal"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <div className="row mb-2">
            <div className="col-lg-12  col-md-12 col-sm-12">
              <div className="d-block p-3 mb-3 shadow bg-body-tertiary rounded">
                <h2>PENYARINGAN AWAL</h2>
                <div className="row mb-2">
                  <div className="col">
                    <label className="mb-1">No. Aplikasi</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="No. Aplikasi"
                        onChange={(e) => setNoAplikasi(e.target.value)}
                        defaultValue={noAplikasi}
                      />
                      <button type="button" className="btn btn-secondary">
                        Cari
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <label className="mb-1">Jenis Nasabah</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Perorangan"
                      disabled
                      readOnly
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <label className="mb-1">NIK</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="NIK"
                      onChange={(e) => setNIK(e.target.value)}
                      defaultValue={NIK}
                    />
                  </div>
                  <div className="col">
                    <label className="mb-1">Pilih Produk Pembiayaan</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pilih Produk Pembiayaan"
                      onChange={(e) => setProdukPembiayaan(e.target.value)}
                      defaultValue={produkPembiayaan}
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <label className="mb-1">Nama Nasabah</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Nasabah"
                      onChange={(e) => setNamaNasabah(e.target.value)}
                      defaultValue={namaNasabah}
                    />
                  </div>
                  <div className="col">
                    <label className="mb-1">Uplad KTP</label>
                    <input type="file" className="form-control" />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <label className="mb-1">Tanggal Permintaan</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tanggal Permintaan"
                      onChange={(e) => setTglPermintaan(e.target.value)}
                      defaultValue={tglPermintaan}
                    />
                  </div>
                  <div className="col">
                    <label className="mb-1">Uplad NPWP</label>
                    <input type="file" className="form-control" />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label className="mb-1">NPWP</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="NPWP"
                      onChange={(e) => setNPWP(e.target.value)}
                      defaultValue={NPWP}
                    />
                  </div>
                </div>
                <div className="row mb-2 mt-2 text-end">
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        triggerSlikUpload();
                        handleSubmitPenyaringan();
                      }}
                    >
                      Lanjutkan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="slik-upload"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabindex="0"
        >
          <div className="row mb-2">
            <div className="col-lg-12  col-md-12 col-sm-12">
              <div className="d-block p-3 mb-3 shadow bg-body-tertiary rounded">
                <h2>SLIK UPLOAD</h2>
                <div className="row mt-2">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <label>Upload SLIK</label>
                    <input
                      type="file"
                      accept=".pdf, .txt"
                      className="form-control"
                    />

                    <div className="form-text">Bisa PDF, TXT</div>
                  </div>
                </div>
                <div className="mt-1 text-end">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={triggerSlikReview}
                  >
                    Lanjutkan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="slik-review"
          role="tabpanel"
          aria-labelledby="pills-tab"
          tabindex="0"
        >
          <div className="row mb-2">
            <div className="col-lg-12  col-md-12 col-sm-12">
              <div className="d-block p-3 mb-3 shadow bg-body-tertiary rounded">
                <h2 className="mb-4">SLIK REVIEW</h2>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="row">
                      <h5>
                        <b>Data Debitur</b>
                      </h5>
                    </div>
                    <div className="mb-2">
                      <label>Nama Pemohon</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nama Pemohon"
                        onChange={(e) => setNamaPemohon(e.target.value)}
                        defaultValue={namaPemohon}
                      />
                    </div>
                    <div className="mb-2">
                      <label>No. Identitas</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="No. Identitas"
                        onChange={(e) => setNoIdentitas(e.target.value)}
                        defaultValue={noIdentitas}
                      />
                    </div>
                    <div className="mb-2">
                      <label>Jenis Kelamin</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Jenis Kelamin"
                        onChange={(e) => setJenisKelamin(e.target.value)}
                        defaultValue={jenisKelamin}
                      />
                    </div>
                    <div className="mb-2">
                      <label>Tempat Lahir</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tempat Lahir"
                        onChange={(e) => setTempatLahir(e.target.value)}
                        defaultValue={tempatLahir}
                      />
                    </div>
                    <div className="mb-2">
                      <label>Tanggal Lahir</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tanggal Lahir"
                        onChange={(e) => setTglLahir(e.target.value)}
                        defaultValue={tglLahir}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="row">
                      <h2 style={{ visibility: "hidden" }}>Kosong</h2>
                    </div>
                    <div className="mb-2">
                      <label>Informasi SLIK</label>
                      <textarea
                        height="250"
                        className="form-control"
                        placeholder="Informasi SLIK"
                        onChange={(e) => setInformasiSlik(e.target.value)}
                        defaultValue={informasiSlik}
                      ></textarea>
                    </div>
                    <div className="mb-2">
                      <label>No. Laporan</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="No. Laporan"
                        onChange={(e) => setNoLaporan(e.target.value)}
                        defaultValue={noLaporan}
                      />
                    </div>
                    <div className="mb-2">
                      <label>Tanggal Permintaan</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tanggal Permintaan"
                        onChange={(e) => setTglPermintaanSlik(e.target.value)}
                        defaultValue={tglPermintaanSlik}
                      />
                    </div>
                    <div className="mb-2">
                      <label>Baki Debet</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Baki Debet"
                        onChange={(e) => setBakiDebet(e.target.value)}
                        defaultValue={bakiDebet}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="row">
                      <h5>
                        <b>Data Debitur</b>
                      </h5>
                    </div>
                    <div className="mb-2">
                      <label>Bank Umum</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Bank Umum"
                      />
                    </div>
                    <div className="mb-2">
                      <label>BPR/BPRS</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="BPR/BPRS"
                      />
                    </div>
                    <div className="mb-2">
                      <label>Lembaga Pembiayaan</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lembaga Pembiayaan"
                      />
                    </div>
                    <div className="mb-2">
                      <label>Lainnya</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lainnya"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <table className="table satrio-table table-bordered">
                      <thead>
                        <tr>
                          <td>Nama</td>
                          <td>Plafon</td>
                          <td>Baki Debet</td>
                          <td>Angsuran</td>
                          <td>Tenor</td>
                          <td>Tanggal Awal Kredit</td>
                          <td>Tanggal Akhir Kredit</td>
                          <td>Agunan</td>
                          <td>Kualitas</td>
                          <td>Bulan Ke-1</td>
                          <td>Bulan Ke-2</td>
                          <td>Bulan Ke-N</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Farhan</td>
                          <td>Rp. 50.000.000</td>
                          <td>15</td>
                          <td>5</td>
                          <td>2018</td>
                          <td>2023</td>
                          <td>XXXX</td>
                          <td>XXXX</td>
                          <td>Rp. 1.500.000</td>
                          <td>Rp. 1.500.000</td>
                          <td>Rp. 1.500.000</td>
                          <td>Rp. 1.500.000</td>
                        </tr>
                        <tr>
                          <td>Dedi</td>
                          <td>Rp. 70.000.000</td>
                          <td>20</td>
                          <td>8</td>
                          <td>2018</td>
                          <td>2023</td>
                          <td>XXXX</td>
                          <td>XXXX</td>
                          <td>Rp. 1.300.000</td>
                          <td>Rp. 1.300.000</td>
                          <td>Rp. 1.300.000</td>
                          <td>Rp. 1.300.000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row justify-content-between mt-3">
                  <h4>
                    <b>Hasil Penyaringan</b>
                  </h4>
                  <div className="col">
                    <label>Kolektabilitas Tertinggi</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Kolektabilitas Tertinggi"
                    />
                  </div>
                  <div className="col">
                    <label>Kesimpulan</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Kesimpulan"
                    />
                  </div>
                </div>
                <div className="mt-4 mb-3 text-end">
                  <button
                    type="button"
                    className="btn btn-danger mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#deletemodal"
                  >
                    Tolak Pengajuan
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      triggerUnggahDok();
                      handleSubmitSlikReview();
                    }}
                  >
                    Lanjutkan
                  </button>
                </div>
                <DeleteModal dispatch={dispatch} removeData={removeData} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="unggah-dokumen"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
          tabindex="0"
        >
          <div className="row mb-2">
            <div className="col-lg-12  col-md-12 col-sm-12">
              <div className="d-block p-3 mb-3 shadow bg-body-tertiary rounded">
                <h2 className="mb-4">Unggah dokumen</h2>
                <h5>
                  <b>Dokumen Pribadi Nasabah</b>
                </h5>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mb-2">
                      <label>Slip Gaji</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileSlipGaji((fileSlipGaji) => [
                            ...fileSlipGaji,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileSlipGaji.length > 0
                        ? fileSlipGaji.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileSlipGaji", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>Kartu Keluarga</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileKartuKeluarga((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileKartuKeluarga.length > 0
                        ? fileKartuKeluarga.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileKartuKeluarga", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>Kartu Pegawai</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileKartuPegawai((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileKartuPegawai.length > 0
                        ? fileKartuPegawai.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileKartuPegawai", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>SK Pengangkatan</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileSkPengangkatan((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileSkPengangkatan.length > 0
                        ? fileSkPengangkatan.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileSkPengangkatan", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>Sertifikasi Profesi</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileSertProfesi((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileSertProfesi.length > 0
                        ? fileSertProfesi.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileSertProfesi", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>Surat Persetujuan pasangan</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileSuratPersPas((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileSuratPersPas.length > 0
                        ? fileSuratPersPas.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileSuratPersPas", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mb-2">
                      <label>Buku Tabungan / Rekening Koran</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileBukuTabungan((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileBukuTabungan.length > 0
                        ? fileBukuTabungan.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileBukuTabungan", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>Kartu ATM</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileKartuAtm((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileKartuAtm.length > 0
                        ? fileKartuAtm.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileKartuAtm", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>Foto Institusi</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileFotoInstitusi((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileFotoInstitusi.length > 0
                        ? fileFotoInstitusi.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileFotoInstitusi", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>Foto Nasabah</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileFotoNasabah((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileFotoNasabah.length > 0
                        ? fileFotoNasabah.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileFotoNasabah", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>Foto Salah Satu Atasan</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileFotoAtasan((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileFotoAtasan.length > 0
                        ? fileFotoAtasan.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileFotoAtasan", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mt-2">
                      <h6>
                        <b>Surat Rekomendasi Atasan</b>
                      </h6>
                    </div>
                    <div className="mb-2 mt-1">
                      <label>Rekomendasi Kepala Sekolah</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileRekomKepsek((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileRekomKepsek.length > 0
                        ? fileRekomKepsek.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileRekomKepsek", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>Rekomendasi Bendahara Korwil / UPTD</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileRekomKorwil((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileRekomKorwil.length > 0
                        ? fileRekomKorwil.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileRekomKorwil", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mt-4 mb-3 text-end">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={triggerUnggahDok}
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                </div>
                <h5>
                  <b>Dokumen Jaminan Nasabah</b>
                </h5>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mb-2">
                      <label>Jenis Jaminan</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileJaminan((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileJaminan.length > 0
                        ? fileJaminan.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileJaminan", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>ATM Nasabah</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileAtmNasabah((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileAtmNasabah.length > 0
                        ? fileAtmNasabah.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileAtmNasabah", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>Jaminan AJB</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileJaminanAjb((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileJaminanAjb.length > 0
                        ? fileJaminanAjb.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileJaminanAjb", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>Jaminan BPKB</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileJaminanBpkb((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileJaminanBpkb.length > 0
                        ? fileJaminanBpkb.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileJaminanBpkb", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mb-2">
                      <label>Jaminan SHM</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileJaminanShm((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileJaminanShm.length > 0
                        ? fileJaminanShm.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileJaminanShm", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>Sertifikasi Profesi</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileSertifikasiProf((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileSertifikasiProf.length > 0
                        ? fileSertifikasiProf.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileSertifikasiProf", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mb-2">
                      <label>Jaminan Lain</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setFileJamLain((prev) => [
                            ...prev,
                            e.target.files[0].name,
                          ]);
                        }}
                      />
                      {fileJamLain.length > 0
                        ? fileJamLain.map((file, i) => (
                            <div className="d-flex justify-content-between mb-1">
                              <span className="d-block">{file}</span>
                              <button
                                id={i}
                                value={file}
                                className="d-block btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  deleteArr("fileJamLain", i);
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="mt-4 mb-3 text-end">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={triggerUnggahDok}
                      >
                        Lanjutkan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
