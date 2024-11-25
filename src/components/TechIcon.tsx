export const TechIcon = ({ component }: { component: React.ElementType }) => {
    const Component = component;
    return (
        <>
            <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
            <svg className="size-0 absolute ">
                <linearGradient id="tech-icon-gradient">
                    <stop offset="0%" stopColor="rgb(249, 177, 110)" />
                    <stop offset="100%" stopColor="rgb(246, 128, 128)"/>
                </linearGradient>
            </svg>
        </>
    );
};