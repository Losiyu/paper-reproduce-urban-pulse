import { createSlice } from "@reduxjs/toolkit";

import feature_nyc from '../data/feature_nyc.json'
import feature_sf from '../data/feature_sf.json'

const dataSlicer = createSlice({
  name: "data",
  initialState: {
    nyc: feature_nyc.features,
    sf: feature_sf.features
  },
  reducers: {
    reset: state => {
      state.nyc = feature_nyc.features
      state.sf = feature_sf.features
    }
  },
});

export const {
  reset
} = dataSlicer.actions

export default dataSlicer.reducer