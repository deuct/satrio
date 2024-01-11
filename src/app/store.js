import { configureStore } from "@reduxjs/toolkit";
import sliceAo from "../features/sliceAo";

export default configureStore({
  reducer: { sliceAo },
});
