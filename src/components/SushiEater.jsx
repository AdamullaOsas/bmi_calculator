import React from "react";
import sushi from "../assets/images/image-man-eating.webp";
import curve from "../assets/images/pattern-curved-line-left.svg";

const SushiEater = () => {
    return (
        <div className="max-w-[1160px] max-h-[533px] flex justify-between mx-auto gap-[131px] mb-24 relative">
            <img src={curve} alt="" className="absolute top-[-50px] right-0" />
            <img src={sushi} alt="" className="max-w-[564px]" />
            <div className="flex flex-col justify-end">
                <h1 className="headingL">What your BMI result means</h1>
                <p className="body text-electricBlue mt-8 mb-10">
                    A BMI range of 18.5 to 24.9 is considered a 'healthy
                    weight.' Maintaining a healthy weight may lower your chances
                    of experiencing health issues later on, such as obesity and
                    type 2 diabetes. Aim for a nutritious diet with reduced fat
                    and sugar content, incorporating ample fruits and
                    vegetables. Additionally, strive for regular physical
                    activity, ideally about 30 minutes daily for five days a
                    week.
                </p>
            </div>
        </div>
    );
};

export default SushiEater;
