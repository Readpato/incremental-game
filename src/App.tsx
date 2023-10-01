import { useState } from "react";

interface Materials {
  rock: number;
  wood: number;
}

interface Tools {
  pickaxe: number;
  axe: number;
}

function App() {
  const [materials, setMaterials] = useState<Materials>({
    wood: 0,
    rock: 0,
  });

  const [tools, setTools] = useState<Tools>({
    pickaxe: 0,
    axe: 0,
  });

  const incrementMaterial = (material: keyof Materials) => {
    setMaterials((previousMaterials) => ({
      ...previousMaterials,
      [material]: previousMaterials[material] + 1,
    }));
  };
  const incrementTool = (tool: keyof Tools) => {
    setTools((previousTools) => ({
      ...previousTools,
      [tool]: previousTools[tool] + 1,
    }));
  };

  return (
    <div className="w-full h-screen max-w-7 mx-auto py-2 px-16 bg-black text-white">
      <pre>{JSON.stringify(materials, null, 2)}</pre>
      <pre>{JSON.stringify(tools, null, 2)}</pre>
      <div className="flex justify-start items-center space-x-2">
        <CtaIncrement value="wood" onClick={() => incrementMaterial("wood")} />
        <CtaIncrement value="rock" onClick={() => incrementMaterial("rock")} />
        {materials.rock > 5 && materials.wood > 5 && (
          <CtaIncrement
            value="pickaxe"
            onClick={() => incrementTool("pickaxe")}
          />
        )}
        {materials.rock > 5 && materials.wood > 5 && (
          <CtaIncrement value="axe" onClick={() => incrementTool("axe")} />
        )}
      </div>
    </div>
  );
}

function CtaIncrement({
  value,
  onClick,
}: {
  value: keyof Materials | keyof Tools;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="p-2 border border-white rounded-md">
      Create {value}
    </button>
  );
}

export default App;
