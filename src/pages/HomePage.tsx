import { Component, For, createSignal } from "solid-js";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

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
        <section id={id} class="flex flex-col py-16 lg:py-24 duration-300">
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
                    <div class="flex gap-8 items-center">
                        <a
                            href="#services"
                            class="px-8 py-2 rounded-lg bg-brand-jet-black hover:bg-neutral-800 active:bg-neutral-950 font-quicksand font-semibold text-sm text-white duration-300 disabled:pointer-events-none disabled:opacity-50"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div class="flex-1 flex flex-row lg:flex-col justify-center duration-300">
                    <img src={HeroIllustration} class="w-full md:w-4/5 lg:w-full duration-300" />
                </div>
            </div>
        </section>
    );
};

const ServicesSection: Component<{ id: string }> = ({ id }) => {
    const [availableServices] = createSignal([
        {
            title: "Web Development",
            text: "Craft responsive and scalable websites tailored to your business needs.",
        },
        {
            title: "Mobile Development",
            text: "Create innovative and user-friendly mobile applications for iOS and Android platforms.",
        },
        {
            title: "API Development",
            text: "Build robust and secure APIs to power your web and mobile applications.",
        },
        {
            title: "Database Solutions",
            text: "Design and implement efficient database solutions to store and manage your data.",
        },
        {
            title: "AI/ML Integration",
            text: "Integrate cutting-edge artificial intelligence and machine learning technologies into your applications.",
        },
        {
            title: "Cloud-Based Solutions",
            text: "Deploy scalable and reliable cloud-based solutions to optimize your business operations and reduce costs.",
        },
        {
            title: "UI/UX Design",
            text: "Create intuitive and visually appealing user interfaces for a seamless user experience.",
        },
        {
            title: "E-commerce Solutions",
            text: "Build customized e-commerce platforms to drive sales and expand your online business.",
        },
    ]);

    return (
        <section id={id} class="flex flex-col gap-8 py-32 lg:py-40 duration-300">
            <h3 class="font-semibold text-lg text-gray-800 leading-loose uppercase underline underline-offset-4 decoration-2 decoration-double decoration-brand-olive-green">
                Services
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                <For each={availableServices()}>
                    {(service, _) => {
                        return (
                            <div class="flex flex-col gap-2 p-6 rounded-xl bg-gray-100 hover:bg-gray-200/70 overflow-hidden cursor-pointer transition-all">
                                <h3 class="font-semibold text-lg text-gray-800 leading-6">{service.title}</h3>
                                <p class="text-sm text-gray-500">{service.text}</p>
                            </div>
                        );
                    }}
                </For>
            </div>
        </section>
    );
};

const HomePage = () => {
    return (
        <>
            <Banner id="public-interest-wall" />
            <div class="max-w-screen-2xl mx-auto">
                <NavBar />
                <main class="px-8">
                    <HeroSection id="hero" />
                    <ServicesSection id="services" />
                </main>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
