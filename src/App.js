import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorNotFound from "./components/Error404";
import Home from "./components/Home";
import StateExample from "./components/State";
import UseEffectExample from "./components/EffectExample";
import RefExample from "./components/RefExample";
import { ColorContext } from "./components/ContextExample";
import React, { useContext, useRef } from "react";
import { Button } from "react-bootstrap";
import MemoExample from "./components/MemoExample";
import ReducerExample from "./components/ReducerExample";
import CustomHook from "./Hooks/CustomHook";

function App() {
  //5-use Context
  const { data, changeData } = useContext(ColorContext);
  const colorValue = useRef();
  return (
    <div>
      <StateExample />
      <UseEffectExample />
      <RefExample />
      <label>{data}</label>
      <input defaultValue={data} ref={colorValue} />
      <Button onClick={() => changeData(colorValue.current.value)}>
        Change Data
      </Button>

      <MemoExample/>

      <ReducerExample/>

      <CustomHook/>
    </div>

    // <div>
    //   <NavBar />
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/content" element={<Content />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/footer" element={<Footer />} />
    //       <Route path="*" element={<ErrorNotFound />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
