import React, { Suspense } from "react";
import ReactDOM from "react-dom";
const AppContainer = React.lazy(() =>
  import("./components/AppContainer/AppContainer")
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Suspense fallback={<div />}>
      <AppContainer />
    </Suspense>,
    document.getElementById("app")
  );
});
