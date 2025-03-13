import React, { useState } from "react";
import Main from "./Components/Main";
import SplashScreen from "./Components/SplashScreen";

function App() {
  
      const [showSplash, setShowSplash] = useState(true);

return showSplash ? <SplashScreen onFinish={() => setShowSplash(false)} /> : <Main />;

   
}

export default App;
