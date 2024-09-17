import React from "react";
import gender from "../assets/images/icon-gender.svg";
import age from "../assets/images/icon-age.svg";
import muscle from "../assets/images/icon-muscle.svg";
import pregnancy from "../assets/images/icon-pregnancy.svg";
import race from "../assets/images/icon-race.svg";
import curve from "../assets/images/pattern-curved-line-right.svg";

const data = [
    {
        image: gender,
        title: "Gender",
        desc: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    },
    {
        image: age,
        title: "Age",
        desc: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    },
    {
        image: muscle,
        title: "Muscle",
        desc: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    },
    {
        image: pregnancy,
        title: "Pregnancy",
        desc: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
    },
    {
        image: race,
        title: "Race",
        desc: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    },
];

const BottomBoxes = () => {
    return (
        <div className="max-w-[1160px] w-full flex flex-col lg:mt-[120px] py-[72px] md:pb-0 lg:py-0 mx-auto gap-8">
            <div className="flex flex-col lg:flex-row lg:gap-[132px] items-center">
                <div className="max-w-[564px] lg:text-start text-center mx-auto">
                    <h1 className="headingL mb-8">Limitations of BMI</h1>
                    <p className="body text-electricBlue">
                        Although BMI is often a practical indicator of healthy
                        weight, it is not suited for every person. Specific
                        groups should carefully consider their BMI outcomes, and
                        in certain cases, the measurement may not be beneficial
                        to use.
                    </p>
                </div>
                <Box
                    image={data[0].image}
                    title={data[0].title}
                    desc={data[0].desc}
                />
            </div>

            <div className="flex flex-col md:flex-row gap-8 lg:justify-end justify-center relative items-center">
                <img
                    src={curve}
                    alt=""
                    className="hidden lg:block lg:absolute top-[-12px] left-[165px]"
                />
                <Box
                    image={data[1].image}
                    title={data[1].title}
                    desc={data[1].desc}
                />
                <Box
                    image={data[2].image}
                    title={data[2].title}
                    desc={data[2].desc}
                />
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center mb-[120px] items-center">
                <Box
                    image={data[3].image}
                    title={data[3].title}
                    desc={data[3].desc}
                />
                <Box
                    image={data[4].image}
                    title={data[4].title}
                    desc={data[4].desc}
                />
            </div>
        </div>
    );
};

const Box = ({ image, title, desc }) => {
    return (
        <div className="flex flex-col max-w-[365px] p-8 gap-4 rounded-2xl shadow-2xl bg-white">
            <div className="flex items-center gap-4">
                <img src={image} alt="" className="w-8 h-8" />
                <h1 className="headingS">{title}</h1>
            </div>
            <p className="body text-electricBlue">{desc}</p>
        </div>
    );
};

export default BottomBoxes;
