import React from "react";

const NumberInputImperial = ({
    type,
    unit,
    and,
    valueFt,
    valueIn,
    onChangeFt,
    onChangeIn,
}) => {
    const handleInputFt = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
        if (typeof onChangeFt === "function") {
            onChangeFt(event);
        }
    };

    const handleInputIn = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
        if (typeof onChangeIn === "function") {
            onChangeIn(event);
        }
    };

    return (
        <div className="flex flex-col w-full gap-2">
            <label className="w-full bodyS text-[#5E6E85]">{type}</label>
            <div className="flex w-full justify-between gap-5">
                <div className="flex flex-row gap-6 py-5 px-6 border-[1px] border-electricBlue rounded-xl focus-within:border-blue w-full flex-1">
                    <input
                        type="text"
                        className="outline-none headingM w-full flex-1"
                        placeholder="0"
                        value={valueFt}
                        onInput={handleInputFt}
                    />
                    <p className="headingM text-blue w-[33px] text-end">
                        {unit}
                    </p>
                </div>
                <div className="flex flex-row gap-6 py-5 px-6 border-[1px] border-electricBlue rounded-xl focus-within:border-blue w-full flex-1">
                    <input
                        type="text"
                        className="outline-none headingM w-full flex-1"
                        placeholder="0"
                        value={valueIn}
                        onInput={handleInputIn}
                    />
                    <p className="headingM text-blue w-[33px] text-end">
                        {and}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NumberInputImperial;
