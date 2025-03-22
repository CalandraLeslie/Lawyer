export const fadeIn = (element, duration = 500) => {
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms`;
    element.style.opacity = 1;
};

export const slideIn = (element, duration = 500) => {
    element.style.transform = 'translateY(20px)';
    element.style.opacity = 0;
    element.style.transition = `transform ${duration}ms, opacity ${duration}ms`;
    requestAnimationFrame(() => {
        element.style.transform = 'translateY(0)';
        element.style.opacity = 1;
    });
};

export const fadeOut = (element, duration = 500) => {
    element.style.transition = `opacity ${duration}ms`;
    element.style.opacity = 0;
    setTimeout(() => {
        element.style.display = 'none';
    }, duration);
};