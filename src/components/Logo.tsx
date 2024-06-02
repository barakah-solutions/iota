const Logo = ({ href = "/", mono = false }) => {
    return (
        <a href={href} class="flex gap-1 select-none">
            <div class="flex gap-4 items-center text-xl lg:text-2xl transition-all">
                <h1 class={mono ? "text-white" : "text-gray-800"}>BSS</h1>
            </div>
            {!mono && (
                <div class="flex flex-col py-2 lg:py-4 transition-all">
                    <h6 class="px-1 py-0.5 rounded-full border border-rose-500 bg-rose-100 text-xs text-rose-900">
                        Beta
                    </h6>
                    <h6>&nbsp;</h6>
                </div>
            )}
        </a>
    );
};

export default Logo;
