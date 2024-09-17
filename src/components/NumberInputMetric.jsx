const NumberInputMetric = ({ type, unit, value, onChange }) => {
    const handleInput = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
        onChange(event);
    };

    return (
        <div className="flex flex-col lg:w-[238px] max-w-[45%] gap-2">
            <label className="bodyS text-[#5E6E85]">{type}</label>
            <div className="flex flex-row md:gap-6 py-5 px-6 border-[1px] border-electricBlue rounded-xl focus-within:border-blue">
                <input
                    type="text"
                    className="outline-none headingM lg:max-w-[131px] max-w-[80%]"
                    placeholder="0"
                    value={value}
                    onInput={handleInput}
                />
                <p className="headingM text-blue">{unit}</p>
            </div>
        </div>
    );
};

export default NumberInputMetric;
