import { useEffect, useState } from "react";
import Login from "./scenes/login";
import Navbar2 from "./scenes/navbar2";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  return (
    <div className="app">
      <Navbar2 />
      <Login />
    </div>
  );
}

export default App;
