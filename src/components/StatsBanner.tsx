"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface StatItem {
    key: string;
    target: number;
    prefix?: string;
    suffix?: string;
}

function AnimatedCounter({
    target,
    prefix = "",
    suffix = "",
    start,
}: {
    target: number;
    prefix?: string;
    suffix?: string;
    start: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let animationFrame: number;
        const duration = 1800;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [start, target]);

    return (
        <span>
            {prefix}
            {count}
            {suffix}
        </span>
    );
}

export default function StatsBanner() {
    const t = useTranslations("Stats");
    const [hasStarted, setHasStarted] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const stats: StatItem[] = [
        { key: "experience", target: 27, suffix: "+" },
        { key: "factories", target: 1200, suffix: "+" },
        { key: "containers", target: 5, suffix: "K+" },
        { key: "reactivity", target: 48, suffix: "H" },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative bg-surface-warm text-gray-900 py-10 md:py-14 border-b border-gray-200/80 overflow-hidden"
        >
            <div className=" px-6 sm:px-10 lg:px-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 lg:gap-x-0 lg:divide-x lg:divide-gray-200">
                    {stats.map((stat) => (
                        <div
                            key={stat.key}
                            className="flex flex-col items-center text-center px-4 lg:px-8"
                        >
                            <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-brand-red tracking-tight mb-1.5">
                                <AnimatedCounter
                                    target={stat.target}
                                    prefix={stat.prefix}
                                    suffix={stat.suffix}
                                    start={hasStarted}
                                />
                            </div>

                            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-gray-900 mb-1">
                                {t(`${stat.key}.label`)}
                            </p>

                            <p className="text-xs text-gray-500 font-normal max-w-60">
                                {t(`${stat.key}.sub`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}