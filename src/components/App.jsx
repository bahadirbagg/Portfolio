import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    Aos.init({durtion:2000});
  },[]);

  return (
    <main id="main">
      <Navbar />
      <Main />
      <Footer />
    </main>
  );
}

export default App;
