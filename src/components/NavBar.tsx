import Logo from "@components/Logo";

const NavBar = () => {
    return (
        <nav class="sticky top-0 bg-white">
            <div class="flex px-8 py-6 lg:py-8 transition-all">
                <Logo />
            </div>
        </nav>
    );
};

export default NavBar;
