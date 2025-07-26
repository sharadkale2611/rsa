// components/LanguageSwitcher.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'; // or use your preferred class merging utility

export default function LanguageSwitcher() {
    const pathname = usePathname();

    // Extract current locale from pathname
    const currentLocale = pathname.split('/')[1] || 'en';

    const changeLocale = (locale: string) => {
        // Replace the locale in the pathname
        return pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    };

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'mr', label: 'म' }
    ];

    return (
        <div className="flex items-center space-x-2">
            {languages.map((lang) => (
                <Link
                    key={lang.code}
                    href={changeLocale(lang.code)}
                    className={clsx(
                        'px-3 py-1 rounded-md text-sm font-medium transition-colors',
                        currentLocale === lang.code
                            ? 'bg-blue-100 text-blue-700' // Active style
                            : 'text-gray-600 hover:bg-gray-100' // Inactive style
                    )}
                    aria-current={currentLocale === lang.code ? 'true' : 'false'}
                >
                    {lang.label}
                </Link>
            ))}
        </div>
    );
}