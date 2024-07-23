import { configureStore } from "@reduxjs/toolkit";
import sideNavSlice from "./slices/sidenavSlice";
import deleteSaaSSlice from "./slices/deleteSaaSSlice";
import createSaaSSlice from "./slices/createSaaSSlice";
import editSaaSSlice from "./slices/editSaaSSlice";
import loginSlice from "./slices/loginSlice";
import currentPathSlice from "./slices/currentPathSlice";
import sideNavDocumentationSlice from "./slices/sidenavDocumentationSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    sidenav: sideNavSlice.reducer,
    deleteSaaS: deleteSaaSSlice.reducer,
    createSaaS: createSaaSSlice.reducer,
    reroute: currentPathSlice.reducer,
    editSaaS: editSaaSSlice.reducer,
    sideNavDoc: sideNavDocumentationSlice.reducer,
  },
});

export default store;
