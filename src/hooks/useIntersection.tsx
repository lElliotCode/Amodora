import { useState, useEffect } from "react"

export function useIntersection(sectionIds: string[]): string {
    const [activeId, setActiveId] = useState<string>("")

    useEffect(() => {
        const observers: IntersectionObserver[] = []

        sectionIds.forEach((id) => {
            const element = document.getElementById(id)

            if (!element) return

            const observer = new IntersectionObserver(
                (entries) => {
                    const [entry] = entries
                    if (entry.isIntersecting) {
                        setActiveId(id)
                    }
                }, { threshold: 0.6 }
            );

            observer.observe(element)
            observers.push(observer)
        });

        return () => {
            observers.forEach((obs) => obs.disconnect())
        };
    }, [sectionIds])

    return activeId
}