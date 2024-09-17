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
        <div className="bg-gradient-to-br from-[#D6E6FE00] to-[#D6E6FE40] h-[402px] max-w-[1392px] mx-auto flex gap-8 rounded-[35px] pt-[72px] px-[117px] pb-[96px]">
            {boxes.map((box, index) => (
                <div className="max-w-[365px]">
                    <img src={box.image} alt="" className="mb-[45px]" />
                    <h1 className="headingM mb-6">{box.title}</h1>
                    <p className="body text-electricBlue">{box.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default AdviceBox;
