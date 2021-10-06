import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./phonebook/reducers";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["contacts/filterContact"],
      },
    }),
});

export default store;
