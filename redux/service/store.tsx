import { configureStore } from "@reduxjs/toolkit";
import counterslices from "./slices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dumydata } from "./service/Dumydata";

export const store = configureStore({

    reducer:{
        counter:counterslices,
        [dumydata.reducerPath]: dumydata.reducer

    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dumydata.middleware),
})

setupListeners(store.dispatch);