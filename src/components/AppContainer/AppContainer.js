import FirebaseContext from "../Firebase/context";
import Firebase from "../Firebase/Firebase";
import React from "react";
const App = React.lazy(() => import("../App/App"));

const AppContainer = () => (
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
);

export default AppContainer;
