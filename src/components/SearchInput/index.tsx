import React from 'react'
import { Input } from '../Input'

interface SearchInputProps {
    children: string
}

export const SearchInput: React.FC<SearchInputProps> = ({ children }) => {
    return (
        <div className="mx-5 my-5 flex justify-between items-center">
            <h2 className="font-bold text-4xl">{children}</h2>
            <Input />
        </div>
    )
}
