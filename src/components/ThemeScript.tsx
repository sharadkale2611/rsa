// components/ThemeEnforcer.tsx
'use client'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export function ThemeEnforcer() {
    const { setTheme } = useTheme()

    useEffect(() => {
        // Triple protection
        if (typeof window !== 'undefined') {
            // 1. Remove any dark classes
            document.documentElement.classList.remove('dark')
            // 2. Force add light class
            document.documentElement.classList.add('light')
            // 3. Set theme in next-themes and localStorage
            setTheme('light')
            localStorage.setItem('my-app-theme', 'light')
            // 4. Clear any conflicting keys
            localStorage.removeItem('theme')
        }
    }, [])

    return null
}