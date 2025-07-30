'use client'

import React, { JSX } from 'react'

export interface TabsProps {
    value: string
    onValueChange: (val: string) => void
    children: React.ReactNode
}

export interface TabProps {
    value: string
    children: React.ReactNode
}

export const Tabs = ({ value, onValueChange, children }: TabsProps): JSX.Element => {
    return (
        <div className="flex space-x-4 border-b border-gray-200 mb-4">
            {React.Children.map(children, (child) => {
                if (React.isValidElement<TabProps>(child)) {
                    const isActive = child.props.value === value
                    return (
                        <button
                            className={`px-4 py-2 text-sm font-medium focus:outline-none cursor-pointer ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
                                }`}
                            onClick={() => onValueChange(child.props.value)}
                            aria-selected={isActive}
                            role="tab"
                        >
                            {child.props.children}
                        </button>
                    )
                }
                return null
            })}
        </div>
    )
}

export const Tab = ({ children }: TabProps): JSX.Element => {
    return <>{children}</>
}
