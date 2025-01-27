import { Component, For, createSignal } from "solid-js";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

import HeroIllustration from "@assets/illustration-dummy-workflow.svg";

const Banner: Component<{ id: string }> = ({ id }) => {
    return (
        <div id={id}>
            <a
                href="https://www.aljazeera.com/news/2023/10/9/whats-the-israel-palestine-conflict-about-a-simple-guide"
                target="blank"
                class="block px-8 py-4 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-sm lg:text-base text-center text-white transition-all"
            >
                <b>Stand for Justice:</b> Free Palestine, End Apartheid.
                <br class="lg:hidden" /> <b>Palestinian State Now!</b>
            </a>
        </div>
    );
};

const HeroSection: Component<{ id: string }> = ({ id }) => {
    return (
        <section id={id} class="flex flex-col py-8 lg:py-16 transition-all">
            <div class="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 transition-all">
                <div class="flex-1 flex flex-col justify-center gap-8 items-start">
                    <div class="text-3xl md:text-4xl xl:text-5xl text-brand-jet-black transition-all">
                        <h1 class="leading-relaxed">Start Your Exciting Journey</h1>
                        <h1 class="leading-relaxed">With Our Solutions</h1>
                    </div>
                    <p class="text-justify text-neutral-700">
                        We specialize in creating solutions for the IT industry. Our mission is straightforward: to lead
                        with sustainable solutions that set new industry standards and drive us towards a smarter, more
                        eco-friendly future.
                    </p>
                    <div class="flex gap-4 items-center">
                        <a
                            href="#services"
                            class="px-8 py-2 rounded-lg bg-brand-jet-black hover:bg-neutral-800 active:bg-neutral-950 font-red-hat-display font-semibold text-sm text-white transition-all"
                        >
                            Learn More
                        </a>
                        <a href="#contact-us" class="px-8 py-2 text-neutral-800 hover:underline">
                            Schedule a Meeting
                        </a>
                    </div>
                </div>
                <div class="flex-1 flex flex-row lg:flex-col justify-center">
                    <img src={HeroIllustration} class="w-full md:w-4/5 lg:w-full transition-all" />
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
        <section id={id} class="flex flex-col gap-8 pt-32 lg:pt-40 transition-all">
            <h3 class="font-semibold text-lg text-neutral-800 leading-loose uppercase underline underline-offset-4 decoration-2 decoration-double decoration-brand-olive-green">
                Services
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                <For each={availableServices()}>
                    {(service, _) => {
                        return (
                            <div class="flex flex-col gap-2 p-6 rounded-xl bg-neutral-100 hover:bg-neutral-200/70 overflow-hidden cursor-pointer transition-all">
                                <h3 class="font-semibold text-lg text-neutral-800 leading-6">{service.title}</h3>
                                <p class="text-sm text-neutral-500">{service.text}</p>
                            </div>
                        );
                    }}
                </For>
            </div>
        </section>
    );
};

const ContactUsSection: Component<{ id: string }> = ({ id }) => {
    return (
        <section id={id} class="flex flex-col gap-8 py-32 lg:py-40 transition-all">
            <h3 class="font-semibold text-lg text-neutral-800 leading-loose uppercase underline underline-offset-4 decoration-2 decoration-double decoration-brand-olive-green">
                Contact
            </h3>
            <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 transition-all">
                <div class="flex-1 flex flex-col gap-2 lg:gap-4 transition-all">
                    <h1 class="text-2xl md:text-3xl xl:text-4xl text-neutral-800 leading-relaxed transition-all">
                        We would love to hear from you!
                    </h1>
                    <p class="text-justify text-neutral-700">
                        As part of our commitment to building meaningful relationships, we offer first-time clients a
                        complimentary consultation session. This session provides valuable insights and sets the stage
                        for our collaboration. Feel free to reach out to us and we will get in touch with you.
                    </p>
                </div>
                <div class="flex-1 flex justify-center md:justify-start lg:justify-end transition-all">
                    <form class="md:min-w-96 w-full md:w-fit flex flex-col gap-6 transition-all" novalidate>
                        <fieldset class="flex flex-col gap-6 disabled:opacity-80 disabled:pointer-events-none">
                            <input
                                placeholder="Subject"
                                class="px-4 py-1.5 rounded-lg outline-none ring-1 ring-neutral-300 focus:ring-brand-olive-green bg-neutral-100 hover:bg-neutral-200/60 text-brand-jet-black transition-all"
                            />
                            <input
                                placeholder="Name"
                                class="px-4 py-1.5 rounded-lg outline-none ring-1 ring-neutral-300 focus:ring-brand-olive-green bg-neutral-100 hover:bg-neutral-200/60 text-brand-jet-black transition-all"
                            />
                            <input
                                placeholder="Email"
                                class="px-4 py-1.5 rounded-lg outline-none ring-1 ring-neutral-300 focus:ring-brand-olive-green bg-neutral-100 hover:bg-neutral-200/60 text-brand-jet-black transition-all"
                            />
                            <input
                                placeholder="Country"
                                class="px-4 py-1.5 rounded-lg outline-none ring-1 ring-neutral-300 focus:ring-brand-olive-green bg-neutral-100 hover:bg-neutral-200/60 text-brand-jet-black transition-all"
                            />
                            <textarea
                                placeholder="Message"
                                class="min-h-48 px-4 py-1.5 rounded-lg outline-none ring-1 ring-neutral-300 focus:ring-brand-olive-green bg-neutral-100 hover:bg-neutral-200/60 text-brand-jet-black transition-all"
                            />
                            <button
                                type="submit"
                                class="px-8 py-2 rounded-lg bg-brand-jet-black hover:bg-neutral-800 active:bg-neutral-950 font-red-hat-display font-semibold text-sm text-white transition-all"
                                disabled
                            >
                                Post
                            </button>
                        </fieldset>
                    </form>
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
                <NavBar />
                <main class="px-8">
                    <HeroSection id="hero" />
                    <ServicesSection id="services" />
                    <ContactUsSection id="contact-us" />
                </main>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
