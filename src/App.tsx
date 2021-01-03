import React from "react";
import "./index";
import Sidebar from "./components/Sidebar";
import { Panel } from "./global";
import Home from "./views/Home";
import Routes from "./routes";

function App() {
  return (
    <div className="dashboard">
      <Sidebar title="TS React Template" />
      <Panel>
        <Routes />
      </Panel>
    </div>
  );
}

export default App;
