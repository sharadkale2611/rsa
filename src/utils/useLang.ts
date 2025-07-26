import { useTranslations } from "next-intl";

export const useLang = () => {
    const t = useTranslations();

    return (label: string | string[]) => {
        const key = Array.isArray(label) ? label.join('.') : label;
        return t(key);
    };
};