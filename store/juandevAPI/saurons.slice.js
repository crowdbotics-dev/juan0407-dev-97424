import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_sauron_list = createAsyncThunk("saurons/api_v1_sauron_list", async payload => {
  const response = await apiService.api_v1_sauron_list(payload);
  return response.data;
});
export const api_v1_sauron_create = createAsyncThunk("saurons/api_v1_sauron_create", async payload => {
  const response = await apiService.api_v1_sauron_create(payload);
  return response.data;
});
export const api_v1_sauron_retrieve = createAsyncThunk("saurons/api_v1_sauron_retrieve", async payload => {
  const response = await apiService.api_v1_sauron_retrieve(payload);
  return response.data;
});
export const api_v1_sauron_update = createAsyncThunk("saurons/api_v1_sauron_update", async payload => {
  const response = await apiService.api_v1_sauron_update(payload);
  return response.data;
});
export const api_v1_sauron_partial_update = createAsyncThunk("saurons/api_v1_sauron_partial_update", async payload => {
  const response = await apiService.api_v1_sauron_partial_update(payload);
  return response.data;
});
export const api_v1_sauron_destroy = createAsyncThunk("saurons/api_v1_sauron_destroy", async payload => {
  const response = await apiService.api_v1_sauron_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const sauronsSlice = createSlice({
  name: "saurons",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(api_v1_sauron_list.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_sauron_list.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sauron_list.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sauron_create.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_sauron_create.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sauron_create.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sauron_retrieve.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_sauron_retrieve.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sauron_retrieve.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sauron_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_sauron_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sauron_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sauron_partial_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_sauron_partial_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sauron_partial_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sauron_destroy.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_sauron_destroy.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sauron_destroy.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  api_v1_sauron_list,
  api_v1_sauron_create,
  api_v1_sauron_retrieve,
  api_v1_sauron_update,
  api_v1_sauron_partial_update,
  api_v1_sauron_destroy,
  slice: sauronsSlice
};