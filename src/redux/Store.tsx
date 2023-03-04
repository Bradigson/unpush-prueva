import { configureStore } from "@reduxjs/toolkit";
import { PersonsSlice } from "./Slice";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';


export const store = configureStore({
    reducer:{
        form:PersonsSlice.reducer
    }
});

export const useAppDispatch: ()=> typeof store.dispatch = useDispatch;

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;

export default store;