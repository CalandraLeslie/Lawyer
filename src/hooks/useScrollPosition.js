// Custom React hook for tracking scroll position
// Provides real-time scroll position updates for scroll-based animations and effects
import { useEffect, useState } from 'react';

/**
 * Custom hook to track window scroll position
 * 
 * This hook provides a way to track the current scroll position of the window
 * and re-render components when the scroll position changes. Useful for:
 * - Scroll-based animations
 * - Changing navbar appearance on scroll
 * - Progress indicators
 * - Parallax effects
 * 
 * @returns {number} Current scroll position in pixels from top of page
 */
const useScrollPosition = () => {
    // State to store current scroll position
    const [scrollPosition, setScrollPosition] = useState(0);

    /**
     * Event handler to update scroll position state
     * Called whenever the user scrolls the page
     */
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    // Effect to set up and clean up scroll event listener
    useEffect(() => {
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function to remove event listener when component unmounts
        // This prevents memory leaks and ensures proper cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    // Return current scroll position for use in components
    return scrollPosition;
};

export default useScrollPosition;