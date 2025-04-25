import "modern-normalize";
import "./App.css";

import { GridLoader } from "react-spinners";

// import { useState } from "react";
import SearchBar from "./searchbar/SearchBar";
// import toast, { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="main">
      <SearchBar />
      <GridLoader />
    </div>
  );
}

{
  /* <Toaster reverseOrder={false} />; */
}

//  const notify = () =>
//    toast("Here is your toast.", {
//      duration: 4000,
//      position: "bottom-right",
//      removeDelay: 1000,
//    });
