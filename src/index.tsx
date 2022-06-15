import React from "react";
import ReactDOM from "react-dom/client";

// TOGGLE THIS ON TO SEE IT BREAK
const wdyrEnabled = false;
if (wdyrEnabled) {
  import("@welldone-software/why-did-you-render").then((lib) => {
    lib.default(React, {});
  });
}

const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.Suspense fallback="Loading...">
    <App />
  </React.Suspense>
);
