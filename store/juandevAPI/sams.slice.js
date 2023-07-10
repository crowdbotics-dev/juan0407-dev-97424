import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sam_list = createAsyncThunk(
  "sams/api_v1_sam_list",
  async payload => {
    const response = await apiService.api_v1_sam_list(payload)
    return response.data
  }
)
export const api_v1_sam_create = createAsyncThunk(
  "sams/api_v1_sam_create",
  async payload => {
    const response = await apiService.api_v1_sam_create(payload)
    return response.data
  }
)
export const api_v1_sam_retrieve = createAsyncThunk(
  "sams/api_v1_sam_retrieve",
  async payload => {
    const response = await apiService.api_v1_sam_retrieve(payload)
    return response.data
  }
)
export const api_v1_sam_update = createAsyncThunk(
  "sams/api_v1_sam_update",
  async payload => {
    const response = await apiService.api_v1_sam_update(payload)
    return response.data
  }
)
export const api_v1_sam_partial_update = createAsyncThunk(
  "sams/api_v1_sam_partial_update",
  async payload => {
    const response = await apiService.api_v1_sam_partial_update(payload)
    return response.data
  }
)
export const api_v1_sam_destroy = createAsyncThunk(
  "sams/api_v1_sam_destroy",
  async payload => {
    const response = await apiService.api_v1_sam_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const samsSlice = createSlice({
  name: "sams",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_sam_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sam_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_sam_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sam_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sam_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_sam_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sam_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sam_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_sam_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sam_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sam_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sam_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sam_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sam_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sam_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sam_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sam_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sam_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_sam_list,
  api_v1_sam_create,
  api_v1_sam_retrieve,
  api_v1_sam_update,
  api_v1_sam_partial_update,
  api_v1_sam_destroy,
  slice: samsSlice
}
