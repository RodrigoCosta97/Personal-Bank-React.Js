import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import DashboardService from "../services/DashboardService";

export const STATUS = {
   WAITING: "waiting",
   LOADING: "loading",
   SUCCESS: "success",
   FAIL: "fail",
};

const initialState = {
   dashboardInfo: {},
   status: STATUS.WAITING,
   error: "",
};

export const getDashboardInfo = createAsyncThunk(
   "dashboard/getDashboardInfo",
   async (userId) => {
      const response = await DashboardService.getAll(userId);
      return response.data; // Retornar apenas a propriedade "data" do response
   }
);

export const dashboardSlice = createSlice({
   name: "Dashboard",
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(getDashboardInfo.pending, (state, action) => {
            state.status = STATUS.LOADING;
         })
         .addCase(getDashboardInfo.fulfilled, (state, action) => {
            state.status = STATUS.SUCCESS;
            state.dashboardInfo = action.payload; // Atribuir o payload diretamente ao estado
         })
         .addCase(getDashboardInfo.rejected, (state, action) => {
            state.status = STATUS.FAIL;
            state.error = action.error.message;
         });
   },
});

export default dashboardSlice.reducer;
