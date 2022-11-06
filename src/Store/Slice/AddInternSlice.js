
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const PostInternData = createAsyncThunk("InternData", async (data) => {
    // console.log(data.files)
    const interndata = new InfoData()
    infodata.append("internFirstname", data.internFirstname);
    infodata.append("internLastname", data.internLastname);
    infodata.append("internEmail", data.internEmail);
    infodata.append("internPhone", data.internPhone);
    infodata.append( "internQualification", data.internQualification);
    infodata.append("internCategory", data.internCategory);

  

  
    await axio.post("/api/post-event",infodata, config);
  });
export const InternDataReducer = createSlice({
    name: "InternData",
    initialState: {
      internData: [],
      internpostloading: false,
    },
    reducer: {},
    extraReducers: {
      [PostInternData.pending]: (state, action) => {
        state.internpostloading = true;
      },
      [PostInternData.fulfilled]: (state, action) => {
        state.internpostloading = false;
        state.eventData = action.payload;
      },
      [PostInternData.rejected]: (state, action) => {
        state.internpostloading = false;
      },
    },
  });
  
  
  
  const addInternReducer = InternDataReducer.reducer;
  export default addInternReducer;