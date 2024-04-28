export const FadeIn = {
    hidden: { opacity: 0, y: -100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            duration: 0.5,
        },
    },
};