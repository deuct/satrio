import { configureStore } from "@reduxjs/toolkit";
import sliceAo from "../features/sliceAo";
import slicePembiayaan from "../features/slicePembiayaan";

export default configureStore({
  reducer: { sliceAo, slicePembiayaan },
});
