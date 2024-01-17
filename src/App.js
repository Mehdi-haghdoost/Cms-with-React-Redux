import React from "react";

import Header from './Components/Header/Header';
import Sidebar from "./Components/Sidebar/Sidebar";
import {useRoutes} from 'react-router-dom'
import './App.css';
import routes from "./routes";

function App() {

  const router = useRoutes(routes)

  return (
    <>
      <Header />
      <div className="container px-0">
        <main className="main">
          <div className="row justify-content-between mx-0">
            <Sidebar />
            {router}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
