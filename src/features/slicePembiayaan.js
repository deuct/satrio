import { createSlice } from "@reduxjs/toolkit";

export const pembiayaanSlice = createSlice({
  name: "pembiayaan",
  initialState: {
    value: {
      penyaringan: {
        noaplikasi: "Example",
        jenisNasabah: "",
        NIK: "",
        produkPembiayaan: "",
        namaNasabah: "",
        tanggalPermintaan: "",
        NPWP: "",
      },
      slikreview: {
        namaPemohon: "",
        noIdentitas: "",
        jenisKelamin: "",
        tempatLahir: "",
        tglLahir: "",
        informasiSlik: "",
        noLaporan: "",
        tglPermintaanSlik: "",
        bakiDebet: "",
      },
    },
  },

  reducers: {
    removeData: (state, action) => {
      state.value.penyaringan.noaplikasi = action.payload;
      state.value.penyaringan.jenisNasabah = action.payload;
      state.value.penyaringan.NIK = action.payload;
      state.value.penyaringan.produkPembiayaan = action.payload;
      state.value.penyaringan.namaNasabah = action.payload;
      state.value.penyaringan.tanggalPermintaan = action.payload;
      state.value.penyaringan.NPWP = action.payload;
      state.value.slikreview.namaPemohon = action.payload;
      state.value.slikreview.noIdentitas = action.payload;
      state.value.slikreview.jenisKelamin = action.payload;
      state.value.slikreview.tempatLahir = action.payload;
      state.value.slikreview.tglLahir = action.payload;
      state.value.slikreview.informasiSlik = action.payload;
      state.value.slikreview.noLaporan = action.payload;
      state.value.slikreview.tglPermintaanSlik = action.payload;
      state.value.slikreview.bakiDebet = action.payload;

      return state;
    },
    saveData: (state, action) => {
      const data = action.payload.data;
      if (action.payload.action === "submitPenyaringan") {
        state.value.penyaringan.noaplikasi = data.noaplikasi;
        state.value.penyaringan.jenisNasabah = data.jenisNasabah;
        state.value.penyaringan.NIK = data.NIK;
        state.value.penyaringan.produkPembiayaan = data.produkPembiayaan;
        state.value.penyaringan.namaNasabah = data.namaNasabah;
        state.value.penyaringan.tanggalPermintaan = data.tanggalPermintaan;
        state.value.penyaringan.NPWP = data.NPWP;
      } else if (action.payload.action === "submitSlikReview") {
        state.value.slikreview.namaPemohon = data.namaPemohon;
        state.value.slikreview.noIdentitas = data.noIdentitas;
        state.value.slikreview.jenisKelamin = data.jenisKelamin;
        state.value.slikreview.tempatLahir = data.tempatLahir;
        state.value.slikreview.tglLahir = data.tglLahir;
        state.value.slikreview.informasiSlik = data.informasiSlik;
        state.value.slikreview.noLaporan = data.noLaporan;
        state.value.slikreview.tglPermintaanSlik = data.tglPermintaanSlik;
        state.value.slikreview.bakiDebet = data.bakiDebet;
      }
    },
  },
});

export const { removeData, saveData } = pembiayaanSlice.actions;

export default pembiayaanSlice.reducer;
