import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Toggler } from "./components/Toggler";
import { useState } from "react";

function App() {

  const [isInterfaceHidden, setIsInterfaceHidden] = useState(false);

  const handleToggleInterface = () => {
    setIsInterfaceHidden(!isInterfaceHidden);
  };

  
  return (
    <>
      <Canvas shadows camera={{ position: [4, 4, -12], fov: 35}}>
        <Experience />
      </Canvas>
      {isInterfaceHidden ? null : <Interface />}
      <Toggler onToggle={handleToggleInterface} />
    
    </>
  );
}

export default App;
