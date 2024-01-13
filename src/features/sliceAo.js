import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: [
      {
        id: 0,
        no: "01",
        ao: "Muhammad Satrio",
        tugas: "Penyaringan Awal",
        status: "Selesai",
        catatan: "-",
        dibuatpada: "9 Februari 2023",
      },
      {
        id: 1,
        no: "02",
        ao: "Muhammad Taufik",
        tugas: "SLIK Upload",
        status: "Belum Dikerjakan",
        catatan: "Segera Diselesaikan",
        dibuatpada: "10 Februari 2023",
      },
      {
        id: 2,
        no: "03",
        ao: "Muhammad Iqbal",
        tugas: "SLIK Review",
        status: "Sedang Dikerjakan",
        catatan: "-",
        dibuatpada: "11 Februari 2023",
      },
      {
        id: 3,
        no: "04",
        ao: "Tafarel Agustino",
        tugas: "Document Entry",
        status: "Belum Dikerjakan",
        catatan: "Pastikan Dokumen Lengkap",
        dibuatpada: "12 Februari 2023",
      },
    ],
    // value: 0,
  },

  reducers: {
    removeData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      //   state.value += 1;
      state.value = action.payload;
    },
    // decrement: (state, action) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    saveData: (state, action) => {
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, removeData } =
  counterSlice.actions;

export default counterSlice.reducer;
