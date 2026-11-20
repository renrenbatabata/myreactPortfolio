import { useEffect } from "react";

export default function PortfolioMotion() {
    useEffect(() => {
        if (!window.IntersectionObserver || !Element.prototype.animate) return;

        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (preference.matches) return;

        const animations = new Set();
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(({ isIntersecting, target }) => {
                if (!isIntersecting || preference.matches) return;

                observer.unobserve(target);

                // Skip entrances when a direct link or keyboard focus takes the visitor here.
                if (target.contains(document.activeElement) ||
                    (target.id && window.location.hash === `#${target.id}`)) return;

                const animation = target.animate(
                    [
                        { opacity: 0.55, transform: "translateY(14px)" },
                        { opacity: 1, transform: "translateY(0)" },
                    ],
                    { duration: 420, easing: "cubic-bezier(.2,.7,.3,1)" },
                );
                animations.add(animation);
                animation.onfinish = () => animations.delete(animation);
                animation.oncancel = () => animations.delete(animation);
            });
        }, { threshold: 0.08 });

        document.querySelectorAll("[data-portfolio-motion]").forEach((node) => observer.observe(node));

        const stopMotion = () => {
            observer.disconnect();
            animations.forEach((animation) => animation.cancel());
            animations.clear();
        };
        preference.addEventListener("change", stopMotion);
        return () => {
            preference.removeEventListener("change", stopMotion);
            stopMotion();
        };
    }, []);

    return null;
}
