import React from "react";
import sushi from "../assets/images/image-man-eating.webp";
import curve from "../assets/images/pattern-curved-line-left.svg";

const SushiEater = () => {
    return (
        <div className="max-w-[1160px] lg:max-h-[533px] md:h-[411px] h-full flex justify-between mx-auto lg:gap-[131px] mb-24 relative">
            <img
                src={curve}
                alt=""
                className=" hidden lg:absolute top-[-50px] right-0"
            />
            <div className="flex md:flex-row flex-col items-center gap-12 md:gap-0">
                <img
                    src={sushi}
                    alt=""
                    className="lg:max-w-[564px] max-w-[435px] h-auto md:-translate-x-[116px]"
                />
                <div className="flex flex-col lg:justify-end justify-around md:-translate-x-[40px] mx-6 md:mx-0 text-center md:text-start">
                    <h1 className="headingL text-[32px] lg:text-[48px] mb-8 md:mb-0">
                        What your BMI result means
                    </h1>
                    <p className="body text-electricBlue lg:mt-8 lg:mb-10">
                        A BMI range of 18.5 to 24.9 is considered a 'healthy
                        weight.' Maintaining a healthy weight may lower your
                        chances of experiencing health issues later on, such as
                        obesity and type 2 diabetes. Aim for a nutritious diet
                        with reduced fat and sugar content, incorporating ample
                        fruits and vegetables. Additionally, strive for regular
                        physical activity, ideally about 30 minutes daily for
                        five days a week.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SushiEater;
