import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_frodo_list = createAsyncThunk(
  "frodos/api_v1_frodo_list",
  async payload => {
    const response = await apiService.api_v1_frodo_list(payload)
    return response.data
  }
)
export const api_v1_frodo_create = createAsyncThunk(
  "frodos/api_v1_frodo_create",
  async payload => {
    const response = await apiService.api_v1_frodo_create(payload)
    return response.data
  }
)
export const api_v1_frodo_retrieve = createAsyncThunk(
  "frodos/api_v1_frodo_retrieve",
  async payload => {
    const response = await apiService.api_v1_frodo_retrieve(payload)
    return response.data
  }
)
export const api_v1_frodo_update = createAsyncThunk(
  "frodos/api_v1_frodo_update",
  async payload => {
    const response = await apiService.api_v1_frodo_update(payload)
    return response.data
  }
)
export const api_v1_frodo_partial_update = createAsyncThunk(
  "frodos/api_v1_frodo_partial_update",
  async payload => {
    const response = await apiService.api_v1_frodo_partial_update(payload)
    return response.data
  }
)
export const api_v1_frodo_destroy = createAsyncThunk(
  "frodos/api_v1_frodo_destroy",
  async payload => {
    const response = await apiService.api_v1_frodo_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const frodosSlice = createSlice({
  name: "frodos",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_frodo_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_frodo_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_frodo_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_frodo_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_frodo_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_frodo_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_frodo_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_frodo_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_frodo_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_frodo_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_frodo_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_frodo_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_frodo_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_frodo_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_frodo_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_frodo_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_frodo_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_frodo_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_frodo_list,
  api_v1_frodo_create,
  api_v1_frodo_retrieve,
  api_v1_frodo_update,
  api_v1_frodo_partial_update,
  api_v1_frodo_destroy,
  slice: frodosSlice
}
