import React from "react";

export const importFile = (file) => {
  return React.lazy(() => import(`../components/${file}`)); // returns a promise
};
