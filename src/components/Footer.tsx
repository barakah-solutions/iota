import { FaSolidCopyright, FaSolidHeart, FaSolidEarthAsia } from "solid-icons/fa";

import Logo from "@components/Logo";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div class="bg-brand-jet-black">
                <div class="max-w-screen-2xl min-h-72 flex items-start mx-auto px-8 py-8 lg:py-16 transition-all">
                    <Logo mono />
                </div>
            </div>
            <div class="bg-neutral-900">
                <div class="max-w-screen-2xl mx-auto px-8 py-4">
                    <p class="text-xs text-center text-neutral-400">
                        Copyright <FaSolidCopyright class="inline" /> {currentYear} <b>&middot;</b> All rights reserved{" "}
                        <b>&middot;</b> Made with <FaSolidHeart class="inline" /> from{" "}
                        <FaSolidEarthAsia class="inline" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
