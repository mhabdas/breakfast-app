import React, { Suspense } from "react";
import ReactDOM from "react-dom";
const AppContainer = React.lazy(() =>
  import("./components/AppContainer/AppContainer")
);
import "core-js/stable";
import "regenerator-runtime/runtime";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Suspense fallback={<div />}>
      <AppContainer />
    </Suspense>,
    document.getElementById("app")
  );
});
