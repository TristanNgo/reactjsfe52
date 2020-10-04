import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StateLessComponent from "./components/StateLessComponent";
import StateFull, { StateFullComponent } from "./components/StateFullComponent";
import Home from "./baitapChiaComponent/Home";
import DemoDataBindin from "./DataBinding/DemoDataBindin";
import FunctionEvent from "./HandleEvents/functionEvent";
import ClassEvent from "./HandleEvents/ClassEvent";
import DemoConditionalAndState from "./DemoLogin/DemoConditionalAndState";
import BaiTapChonMauXe from "./ChonMauXe";
function App() {
  return (
    <div>
      {/* <StateLessComponent />
      <StateFullComponent /> */}
      {/* <Home />
      <DemoDataBindin /> */}
      {/* <FunctionEvent /> */}
      {/* <ClassEvent /> */}
      {/* <DemoConditionalAndState /> */}
      <BaiTapChonMauXe />
    </div>
  );
}

export default App;
