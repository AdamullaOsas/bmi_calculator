import React from "react";
import Calculator from "./components/Calculator";
import SushiEater from "./components/SushiEater";

const App = () => {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <Calculator />
            <SushiEater />
        </div>
    );
};

export default App;
