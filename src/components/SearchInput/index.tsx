import React from 'react'
import { Input } from '../Input'

interface SearchInputProps {
    text: string
}

export const SearchInput: React.FC<SearchInputProps> = ({ text }) => {
    return (
        <div className="mx-5 my-5 flex justify-between items-center">
            <h2 className="font-bold text-4xl	">{text}</h2>
            <Input />
        </div>
    )
}
