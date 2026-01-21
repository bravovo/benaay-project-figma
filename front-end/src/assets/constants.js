export const languages = [
    {
        short: "Eng",
        name: "English",
        i18n: "en",
    },
    {
        short: "Ara",
        name: "Arabic",
        i18n: "ar",
    },
];

export const categories = [
    {
        styles: {
            container: { backgroundColor: "var(--category-plumbing-bg)" },
            link: {
                color: "var(--category-plumbing-primary)",
                border: "1px solid var(--category-plumbing-primary)",
                arrow: { color: "var(--category-plumbing-primary)" },
            },
            number: { backgroundColor: "var(--category-plumbing-secondary)" },
        },
        title: "Plumbing connections",
        description:
            "Durable connectors for reliable water flow in any plumbing system",
        link: "#",
    },
    {
        styles: {
            container: { backgroundColor: "var(--category-upvc-bg)" },
            link: {
                color: "var(--category-upvc-primary)",
                border: "1px solid var(--category-upvc-primary)",
                arrow: { color: "var(--category-upvc-primary)" },
            },
            number: { backgroundColor: "var(--category-upvc-secondary)" },
        },
        title: "UPVC fittings",
        description:
            "Lightweight, corrosion-resistant fittings for modern piping solutions",
        link: "#",
    },
    {
        styles: {
            container: { backgroundColor: "var(--category-ppr-bg)" },
            link: {
                color: "var(--category-ppr-primary)",
                border: "1px solid var(--category-ppr-primary)",
                arrow: { color: "var(--category-ppr-primary)" },
            },
            number: { backgroundColor: "var(--category-ppr-secondary)" },
        },
        title: "PPR fittings",
        description:
            "High-pressure, heat-resistant fittings built for long-term performance",
        link: "#",
    },
];
