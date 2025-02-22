import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// useSelector ne peut pas être utilisé en dehors d'un composant React, 
// c'est pourquoi nous avons passé le jeton en tant qu'argument.

export const getProfilData = createAsyncThunk(
  "profilData/fetchProfilData",
  async (tok) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${tok}`,
      },
    });
    const data = await response.json();
    return data;
  }
);
const initialState = {
  loading: false,
  data: [],
  error: null,
};
export const profilDataSlice = createSlice({
  name: "profilData",
  initialState,
  reducers: {
    updateUsernameLocally: (state, action) => {
      if (state.data.body) {
        state.data.body.userName = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfilData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfilData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProfilData.rejected, (state) => {
        state.loading = false;
        state.error = "An error occurred while fetching data.";
      });
  },
});

export const { updateUsernameLocally } = profilDataSlice.actions;
export const { SaveDataProfil } = profilDataSlice.actions;
export default profilDataSlice.reducer;
