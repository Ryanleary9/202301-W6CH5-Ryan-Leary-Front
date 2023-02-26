import { createAction } from "@reduxjs/toolkit";
import { BearStructure } from "../models/bear";
import { bearActions } from "./bear.actions.type";

export const loadCreator = createAction<BearStructure[]>(bearActions.load);

export const loadIdCreator = createAction<BearStructure>(bearActions.loadId);

export const addCreator = createAction<BearStructure>(bearActions.add);

export const updateCreator = createAction<BearStructure>(bearActions.update);

export const deleteCreator = createAction<BearStructure["id"]>(
  bearActions.delete
);
