import { Component } from "solid-js";

import HeroIllustration from "@assets/illustration-office-environment.svg";

const Banner: Component<{ id: string }> = ({ id }) => {
    return (
        <div id={id}>
            <a
                href="https://www.aljazeera.com/news/2023/10/9/whats-the-israel-palestine-conflict-about-a-simple-guide"
                target="blank"
                class="block px-8 py-4 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-sm lg:text-base text-center text-white duration-300"
            >
                <b>Stand for Justice:</b> Free Palestine, End Apartheid.
                <br class="lg:hidden" /> <b>Palestinian State Now!</b>
            </a>
        </div>
    );
};

const HeroSection: Component<{ id: string }> = ({ id }) => {
    return (
        <section id={id} class="flex flex-col py-16 lg:py-44 duration-300">
            <div class="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 duration-300">
                <div class="flex-1 flex flex-col justify-center gap-8 items-start">
                    <div class="text-3xl md:text-4xl xl:text-5xl text-gray-800 duration-300">
                        <h1 class="leading-relaxed">
                            <u class="decoration-4 lg:decoration-8 decoration-brand-midnight-blue duration-300">
                                Innovating
                            </u>{" "}
                            Sustainability,
                        </h1>
                        <h1 class="leading-relaxed">
                            <u class="decoration-4 lg:decoration-8 decoration-brand-apple-green duration-300">
                                Empowering
                            </u>{" "}
                            Tomorrow
                        </h1>
                    </div>
                    <p class="text-justify text-gray-700">
                        We are leveraging cutting-edge technology to drive innovation and efficiency. Our mission is
                        simple: to pioneer sustainable solutions that redefine industry standards and lead the charge
                        towards a smarter, more sustainable future.
                    </p>
                </div>
                <div class="flex-1 flex flex-row lg:flex-col justify-center duration-300">
                    <img src={HeroIllustration} class="w-full md:w-4/5 lg:w-full duration-300" />
                </div>
            </div>
        </section>
    );
};

const HomePage = () => {
    return (
        <>
            <Banner id="public-interest-wall" />
            <div class="max-w-screen-2xl mx-auto">
                <main class="px-8">
                    <HeroSection id="hero" />
                </main>
            </div>
        </>
    );
};

export default HomePage;
