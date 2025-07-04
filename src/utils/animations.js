// Utility functions for DOM element animations
// Provides reusable animation functions for fade and slide effects

/**
 * Fades in an element by animating its opacity
 * 
 * @param {HTMLElement} element - The DOM element to animate
 * @param {number} duration - Animation duration in milliseconds (default: 500ms)
 */
export const fadeIn = (element, duration = 500) => {
    // Start with element invisible
    element.style.opacity = 0;
    
    // Set up CSS transition for smooth animation
    element.style.transition = `opacity ${duration}ms`;
    
    // Trigger fade in by setting opacity to 1
    element.style.opacity = 1;
};

/**
 * Slides in an element from bottom with fade effect
 * Combines transform and opacity animations for a smooth slide-up effect
 * 
 * @param {HTMLElement} element - The DOM element to animate
 * @param {number} duration - Animation duration in milliseconds (default: 500ms)
 */
export const slideIn = (element, duration = 500) => {
    // Set initial state: moved down 20px and invisible
    element.style.transform = 'translateY(20px)';
    element.style.opacity = 0;
    
    // Set up CSS transitions for both transform and opacity
    element.style.transition = `transform ${duration}ms, opacity ${duration}ms`;
    
    // Use requestAnimationFrame to ensure initial styles are applied
    // before triggering the animation
    requestAnimationFrame(() => {
        // Animate to final position: normal position and fully visible
        element.style.transform = 'translateY(0)';
        element.style.opacity = 1;
    });
};

/**
 * Fades out an element and optionally hides it
 * 
 * @param {HTMLElement} element - The DOM element to animate
 * @param {number} duration - Animation duration in milliseconds (default: 500ms)
 */
export const fadeOut = (element, duration = 500) => {
    // Set up CSS transition for smooth fade out
    element.style.transition = `opacity ${duration}ms`;
    
    // Start fade out animation
    element.style.opacity = 0;
    
    // After animation completes, hide the element completely
    setTimeout(() => {
        element.style.display = 'none';
    }, duration);
};