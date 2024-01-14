import React from "react";

import Header from './Components/Header/Header';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />

      <div class="container px-0">
        <main class="main">
          <div class="row justify-content-between mx-0">
            <Sidebar />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
