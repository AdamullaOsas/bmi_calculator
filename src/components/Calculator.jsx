import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import NumberInput from "./NumberInput";

const Calculator = () => {
    const [unitSystem, setUnitSystem] = useState("metric");

    const handleUnitChange = (event) => {
        setUnitSystem(event.target.value);
    };

    return (
        <div className="min-h-[737px] mb-16">
            <div
                id="background"
                className="absolute z-[-10] top-0 left-[100px] rounded-b-[35px] w-full max-w-[978px] h-[737px] bg-gradient-to-br from-[#D6E6FE00] to-[#D6E6FEFF]"
            ></div>
            <div className="max-w-[564px] mt-[70px] ml-[140px]">
                <img src={logo} alt="" className="w-16 h-16 mb-[127px]" />
                <h1 className="headingXL mb-8 tracking-[-5%] pr-20">
                    Body Mass Index Calculator
                </h1>
                <p className="body text-electircBlue max-w-[465px]">
                    Better understand your weight in relation to your height
                    using our body mass index (BMI) calculator. While BMI is not
                    the sole determinant of a healthy weight, it offers a
                    valuable starting point to evaluate your overall health and
                    well-being.
                </p>
            </div>
            <div className="absolute top-[180px] right-[140px] flex flex-col justify-between w-full max-w-[564px] bg-white min-h-[448px] p-8 rounded-2xl shadow-md">
                <h1 className="headingM">Enter your details below</h1>
                <div className="flex">
                    <div className="flex gap-4 flex-1">
                        <input
                            type="radio"
                            id="metric"
                            name="unitSystem"
                            value="metric"
                            checked={unitSystem === "metric"}
                            onChange={handleUnitChange}
                        />
                        <label htmlFor="metric" className="bodyBold">
                            Metric
                        </label>
                    </div>
                    <div className="flex-1">
                        <input
                            type="radio"
                            id="imperial"
                            name="unitSystem"
                            value="imperial"
                            checked={unitSystem === "imperial"}
                            onChange={handleUnitChange}
                        />
                        <label htmlFor="imperial" className="bodyBold">
                            Imperial
                        </label>
                    </div>
                </div>
                <div className="flex justify-between gap-6">
                    {unitSystem === "metric" ? (
                        <>
                            <NumberInput type="Height" unit="cm" />
                            <NumberInput type="Weight" unit="kg" />
                        </>
                    ) : (
                        <>
                            <NumberInput type="Height" unit="ft" />
                            <NumberInput type="Weight" unit="lbs" />
                        </>
                    )}
                </div>
                <div className="flex justify-between gap-6 w-full bg-blue p-8 rounded-l-2xl rounded-r-[500px]">
                    <div className="flex-1">
                        <p className="bodyBold text-white">Your BMI is...</p>
                        <h1 className="headingXL text-white">0.0</h1>
                    </div>
                    <div className="flex-1 rounded-r-full">
                        <p className="text-white bodyS">
                            Your BMI suggests you're a healthy weight. Your
                            ideal weight is between{" "}
                            <span className="font-bold">
                                63.3kgs - 85.2kgs.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
