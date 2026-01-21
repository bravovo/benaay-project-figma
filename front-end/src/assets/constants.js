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

export const getCategoriesConfig = (t) => [
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
        title: t("home.categories.plumbing.title"),
        description: t("home.categories.plumbing.description"),
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
        title: t("home.categories.upvc.title"),
        description: t("home.categories.upvc.description"),
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
        title: t("home.categories.ppr.title"),
        description: t("home.categories.ppr.description"),
        link: "#",
    },
];
