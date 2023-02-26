import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { bearReducer } from "../../../feature/bears/reducer/bear.reducer";

export const store = configureStore({
  reducer: {
    bears: bearReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
