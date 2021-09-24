import React from 'react'

export const Input = () => {
    return (
        <div className="inline-flex flex-col justify-center relative text-gray-500">
            <input
                type="text"
                className="p-2 pl-8 rounded border border-gray-200 bg-white-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                placeholder="search..."
                
            />
            <svg
                className="w-4 h-4 absolute left-2.5 top-3.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </div>
    )
}
