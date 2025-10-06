import { Suspense, useState } from "react";
import { importFile } from "./utils/importFile";

const components = [
  {
    path: "todos",
    btnLabel: "Todos",
  },
  {
    path: "posts",
    btnLabel: "Posts",
  },
];

function App() {
  const [component, setComponent] = useState(null);

  const selectComp = async (path) => {
    const Comp = await importFile(path);

    setComponent(<Comp />);
  };

  return (
    <div className="p-5">
      <nav className="space-x-3">
        {components.map((comp) => (
          <button
            key={comp.path}
            onClick={() => selectComp(comp.path)}
            className="bg-gray-600 p-2 rounded-sm "
          >
            {comp.path}
          </button>
        ))}
      </nav>

      <Suspense fallback={<h2>Loading...</h2>}>{component}</Suspense>
    </div>
  );
}

export default App;
