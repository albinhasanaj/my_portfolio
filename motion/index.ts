export const FadeInFromRight = {
    hidden: { opacity: 0, x: 100 },  // Start from 100 pixels to the right
    visible: {
        opacity: 1,
        x: 0,  // Move to original position
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        x: 100,  // Move back to the right
        transition: {
            duration: 0.5,
        },
    },
};
