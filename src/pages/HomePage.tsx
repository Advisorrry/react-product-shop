import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { SearchInput } from '../components/SearchInput'
import { IProduct } from '../utils/types'
import {useFetching} from '../hooks/useFetching'

export const HomePage: React.FC = () => {
    const skeakers = useFetching()

    

    return (
        <div className="flex flex-col">
            <SearchInput>Все товары</SearchInput>
            <div className="flex flex-wrap justify-between p-3">
                {skeakers.map((item) => (
                    <ProductCard
                        key={item.id}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        name={item.name}
                    />
                ))}
            </div>
        </div>
    )
}
