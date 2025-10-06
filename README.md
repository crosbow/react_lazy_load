# 💤 React Lazy Load (Main Component Explanation)

In this example, **lazy loading** is implemented in the main `App.jsx` file using `React.lazy()` and `Suspense`.

### 📘 `App.jsx` Explanation

```jsx
import { Suspense, useState } from "react";
import { importFile } from "./utils/importFile";

const components = [
  { path: "todos", btnLabel: "Todos" },
  { path: "posts", btnLabel: "Posts" },
];

function App() {
  const [component, setComponent] = useState(null);

  const selectComp = async (path) => {
    const Comp = await importFile(path); // dynamically imports the component
    setComponent(<Comp />); // sets the component to render
  };

  return (
    <div className="p-5">
      <nav className="space-x-3">
        {components.map((comp) => (
          <button
            key={comp.path}
            onClick={() => selectComp(comp.path)}
            className="bg-gray-600 p-2 rounded-sm"
          >
            {comp.btnLabel}
          </button>
        ))}
      </nav>

      {/* Suspense shows fallback while component is being loaded */}
      <Suspense fallback={<h2>Loading...</h2>}>{component}</Suspense>
    </div>
  );
}

export default App;
```

```jsx
import React from "react";

export const importFile = (file) => {
  return React.lazy(() => import(`../components/${file}`)); // returns a promise
};
```
