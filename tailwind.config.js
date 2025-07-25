/** @type {import('tailwindcss').Config} */
module.exports = {
    // darkMode: 'media', // or 'class' if toggled via a class
    darkMode: 'class', // or 'class' if toggled via a class
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}', // also add app directory if you're using Next.js App Router
        './components/**/*.{js,ts,jsx,tsx,mdx}', // and components
    ],
    theme: {
        extend: {
            colors: {
                // Brand colors via CSS variables
                'brand-cyan': 'var(--brand-cyan)',
                'brand-red': 'var(--brand-red)',
                'brand-yellow': 'var(--brand-yellow)',
                'brand-orange': 'var(--brand-orange)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
                'footer-bg': 'var(--footer-bg)',
            },
            textColor: {
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
                inverse: 'var(--text-inverse)',
                accent: 'var(--text-accent)',
                light: 'var(--text-light)',
                dark: 'var(--text-dark)',
            },
            borderColor: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
            },
            backgroundColor: {
                inverse: 'var(--text-inverse)', // optionally add inverse background color
            },
        },
    },
    plugins: [],
};
