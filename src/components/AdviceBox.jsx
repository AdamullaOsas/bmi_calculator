import React from "react";
import food from "../assets/images/icon-eating.svg";
import workout from "../assets/images/icon-exercise.svg";
import amimir from "../assets/images/icon-sleep.svg";

const boxes = [
    {
        title: "Healthy eating",
        desc: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
        image: food,
    },
    {
        title: "Regular exercise",
        desc: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
        image: workout,
    },
    {
        title: "Adequate sleep",
        desc: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
        image: amimir,
    },
];

const AdviceBox = () => {
    return (
        <div className="bg-gradient-to-br from-[#D6E6FE00] to-[#D6E6FE40] lg:max-h-[402px] h-full max-w-[1392px] mx-auto flex gap-8 rounded-[35px] lg:pt-[72px] lg:px-[117px] px-5 md:px-10 py-[60px] lg:pb-[96px] w-full lg:flex-row flex-col">
            {boxes.map((box, index) => (
                <div
                    className="lg:max-w-[365px] flex lg:flex-col flex-row gap-[40px] items-center lg:items-start"
                    key={index}
                >
                    <img src={box.image} alt="" className="size-16" />
                    <div className="flex flex-col">
                        <h1 className="headingM mb-6">{box.title}</h1>
                        <p className="body text-electricBlue">{box.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdviceBox;
