import React from "react";

const NumberInput = ({ type, unit }) => {
    return (
        <div className="flex flex-col lg:w-[238px] gap-2">
            <label className="bodyS text-[#5E6E85]">{type}</label>
            <div className="flex flex-row gap-6 py-5 px-6 border-[1px] border-electricBlue rounded-xl">
                <input
                    type="text"
                    className="outline-none headingM max-w-[131px]"
                    placeholder="0"
                ></input>
                <p className="headingM text-blue">{unit}</p>
            </div>
        </div>
    );
};

export default NumberInput;
