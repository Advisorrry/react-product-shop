import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { SearchInput } from '../components/SearchInput'


export const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col">
            <SearchInput>Все товары</SearchInput>
            <div className='flex flex-wrap justify-between p-3'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}
