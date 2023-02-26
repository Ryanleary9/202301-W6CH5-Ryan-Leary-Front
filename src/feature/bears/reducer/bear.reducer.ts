import { createReducer } from "@reduxjs/toolkit";
import { BearStructure } from "../models/bear";
import * as ac from "./bear.actions.creater";

const initialState: BearStructure[] = [];

export const bearReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
  builder.addCase(ac.loadIdCreator, (state, { payload }) => {
    state.find((item) => (item.id === payload.id ? payload : item));
  });

  builder.addCase(ac.addCreator, (state, { payload }) => [...state, payload]);
  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) =>
      item.id === payload.id ? { ...item, ...payload } : item
    )
  );

  builder.addCase(ac.deleteCreator, (state, { payload }) =>
    state.filter((item) => item.id !== payload)
  );

  builder.addDefaultCase((state) => state);
});
