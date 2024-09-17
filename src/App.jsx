import React from "react";
import Calculator from "./components/Calculator";
import SushiEater from "./components/SushiEater";
import AdviceBox from "./components/AdviceBox";
import BottomBoxes from "./components/BottomBoxes";

const App = () => {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <Calculator />
            <SushiEater />
            <AdviceBox />
            <BottomBoxes />
        </div>
    );
};

export default App;
