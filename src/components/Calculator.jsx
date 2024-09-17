import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import NumberInputMetric from "./NumberInputMetric";
import NumberInputImperial from "./NumberInputImperial";

const Calculator = () => {
    const [unitSystem, setUnitSystem] = useState("metric");

    const [metricHeight, setMetricHeight] = useState("");
    const [metricWeight, setMetricWeight] = useState("");

    const [imperialHeightFt, setImperialHeightFt] = useState("");
    const [imperialHeightIn, setImperialHeightIn] = useState("");
    const [imperialWeightSt, setImperialWeightSt] = useState("");
    const [imperialWeightLbs, setImperialWeightLbs] = useState("");

    const isAnyFieldEmpty = () => {
        if (unitSystem === "metric") {
            return metricHeight === "" || metricWeight === "";
        } else {
            return (
                imperialHeightFt === "" ||
                imperialHeightIn === "" ||
                imperialWeightSt === "" ||
                imperialWeightLbs === ""
            );
        }
    };

    const calculateBMI = () => {
        let bmi = 0;
        let minWeight = 0;
        let maxWeight = 0;

        if (unitSystem === "metric") {
            const heightInMeters = metricHeight / 100;
            bmi = (metricWeight / (heightInMeters * heightInMeters)).toFixed(1);

            minWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
            maxWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);
        } else {
            const totalHeightInInches =
                parseInt(imperialHeightFt) * 12 + parseInt(imperialHeightIn);

            const totalWeightInLbs =
                parseInt(imperialWeightSt) * 14 + parseInt(imperialWeightLbs);

            bmi = (
                (totalWeightInLbs /
                    (totalHeightInInches * totalHeightInInches)) *
                703
            ).toFixed(1);

            minWeight = (
                (18.5 * totalHeightInInches * totalHeightInInches) /
                703
            ).toFixed(1);
            maxWeight = (
                (24.9 * totalHeightInInches * totalHeightInInches) /
                703
            ).toFixed(1);
        }

        return { bmi, minWeight, maxWeight };
    };

    const { bmi, minWeight, maxWeight } = calculateBMI();

    return (
        <div className="min-h-[737px] mb-16 flex flex-col">
            <div
                id="background"
                className="absolute z-[-10] top-0 lg:left-[100px] rounded-b-[35px] w-full lg:max-w-[978px] h-[737px] bg-gradient-to-br from-[#D6E6FE00] to-[#D6E6FEFF]"
            ></div>
            <div className="lg:max-w-[564px] mx-[40px] mb-10 flex flex-col items-center text-center lg:items-start lg:text-start lg:ml-[170px]">
                <img src={logo} alt="" className="w-16 h-16 mb-[127px] mt-8" />
                <h1 className="headingXL mb-8 tracking-[-5%] lg:pr-20">
                    Body Mass Index Calculator
                </h1>
                <p className="body text-electricBlue lg:max-w-[465px]">
                    Better understand your weight in relation to your height
                    using our body mass index (BMI) calculator. While BMI is not
                    the sole determinant of a healthy weight, it offers a
                    valuable starting point to evaluate your overall health and
                    well-being.
                </p>
            </div>
            <div className="lg:absolute top-[180px] right-[140px] flex flex-col justify-between lg:w-full w-[90%] mx-auto lg:max-w-[564px] bg-white min-h-[448px] p-8 rounded-2xl shadow-md">
                <h1 className="headingM">Enter your details below</h1>
                <div className="flex gap-8 mt-8">
                    <div
                        className="flex gap-4 flex-1 items-center cursor-pointer group"
                        onClick={() => setUnitSystem("metric")}
                    >
                        <div
                            className={`size-8 rounded-full flex items-center justify-center ${
                                unitSystem === "metric"
                                    ? "bg-[#345FF6] bg-opacity-15"
                                    : ""
                            }`}
                        >
                            <div
                                className={`${
                                    unitSystem === "metric"
                                        ? "size-4 bg-[#345FF6] rounded-full"
                                        : "size-8 border-[1px] border-[#6C9AA3] rounded-full group-hover:border-blue"
                                }`}
                            ></div>
                        </div>
                        <label
                            htmlFor="metric"
                            className="bodyBold cursor-pointer"
                        >
                            Metric
                        </label>
                    </div>
                    <div
                        className="flex gap-4 flex-1 items-center cursor-pointer group"
                        onClick={() => setUnitSystem("imperial")}
                    >
                        <div
                            className={`size-8 rounded-full flex items-center justify-center ${
                                unitSystem === "imperial"
                                    ? "bg-[#345FF6] bg-opacity-15"
                                    : ""
                            }`}
                        >
                            <div
                                className={`${
                                    unitSystem === "imperial"
                                        ? "size-4 bg-[#345FF6] rounded-full"
                                        : "size-8 border-[1px] border-[#6C9AA3] rounded-full group-hover:border-blue"
                                }`}
                            ></div>
                        </div>
                        <label
                            htmlFor="imperial"
                            className="bodyBold cursor-pointer"
                        >
                            Imperial
                        </label>
                    </div>
                </div>
                <div className="flex justify-between gap-6 mt-8">
                    {unitSystem === "metric" ? (
                        <>
                            <NumberInputMetric
                                type="Height"
                                unit="cm"
                                value={metricHeight}
                                onChange={(e) =>
                                    setMetricHeight(e.target.value)
                                }
                            />
                            <NumberInputMetric
                                type="Weight"
                                unit="kg"
                                value={metricWeight}
                                onChange={(e) =>
                                    setMetricWeight(e.target.value)
                                }
                            />
                        </>
                    ) : (
                        <div className="flex flex-col w-full gap-6">
                            <NumberInputImperial
                                type="Height"
                                unit="ft"
                                and="in"
                                valueFt={imperialHeightFt}
                                valueIn={imperialHeightIn}
                                onChangeFt={(e) =>
                                    setImperialHeightFt(e.target.value)
                                }
                                onChangeIn={(e) =>
                                    setImperialHeightIn(e.target.value)
                                }
                            />
                            <NumberInputImperial
                                type="Weight"
                                unit="st"
                                and="lbs"
                                valueFt={imperialWeightSt}
                                valueIn={imperialWeightLbs}
                                onChangeFt={(e) =>
                                    setImperialWeightSt(e.target.value)
                                }
                                onChangeIn={(e) =>
                                    setImperialWeightLbs(e.target.value)
                                }
                            />
                        </div>
                    )}
                </div>

                {isAnyFieldEmpty() ? (
                    <div className="flex flex-col justify-between gap-4 bg-blue w-full p-8 rounded-l-2xl rounded-r-2xl sm:rounded-r-[500px] mt-8">
                        <h1 className="headingM text-white">Welcome!</h1>
                        <p className="bodyS text-white">
                            Enter your height and weight and you'll see your BMI
                            result here
                        </p>
                    </div>
                ) : (
                    <div className="flex justify-between gap-6 w-full p-8 rounded-l-2xl  rounded-r-2xl sm:rounded-r-[500px] mt-8 bg-blue">
                        <div className="flex-1">
                            <p className="bodyBold text-white">
                                Your BMI is...
                            </p>
                            <h1 className="headingXL text-white">{bmi}</h1>
                        </div>
                        <div className="flex-1 rounded-r-full">
                            <p className="text-white bodyS">
                                Your BMI suggests you're a{" "}
                                {bmi < 18.5
                                    ? "underweight"
                                    : bmi > 24.9
                                    ? "overweight"
                                    : "healthy weight"}
                                . Your ideal weight is between{" "}
                                <span className="font-bold">
                                    {minWeight}kgs - {maxWeight}kgs
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calculator;
