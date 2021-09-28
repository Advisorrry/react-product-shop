import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { SearchInput } from '../components/SearchInput'
import { IProduct } from '../utils/types'

export const HomePage: React.FC = () => {
    const data: IProduct[] = [
        {
            price: 12344,
            name: 'Мужские Кроссовки Nike Blazer Mid Suede',
            imageUrl: 'img/sneakers/1.jpg',
            id: 1,
        },
        {
            price: 17344,
            name: 'Мужские Кроссовки Nike Air Max 270',
            imageUrl: 'img/sneakers/2.jpg',
            id: 2,
        },
        {
            price: 7244,
            name: 'Мужские Кроссовки Nike Blazer Mid Suede',
            imageUrl: 'img/sneakers/3.jpg',
            id: 3,
        },
        {
            price: 7699,
            name: 'Кроссовки Puma X Aka Boku Future Rider',
            imageUrl: 'img/sneakers/4.jpg',
            id: 4,
        },
        {
            price: 17500,
            name: 'Мужские Кроссовки Under Armour Curry 8',
            imageUrl: 'img/sneakers/5.jpg',
            id: 5,
        },
        {
            price: 7500,
            name: 'Мужские Кроссовки Nike Kyrie 7',
            imageUrl: 'img/sneakers/6.jpg',
            id: 6,
        },
        {
            price: 8232,
            name: 'Мужские Кроссовки Jordan Air Jordan 11',
            imageUrl: 'img/sneakers/7.jpg',
            id: 7,
        },
        {
            price: 8432,
            name: 'Мужские Кроссовки Nike LeBron XVIII',
            imageUrl: 'img/sneakers/8.jpg',
            id: 8,
        },
        {
            price: 21320,
            name: 'Мужские Кроссовки Nike Lebron XVIII Low',
            imageUrl: 'img/sneakers/9.jpg',
            id: 9,
        },
        {
            price: 15343,
            name: 'Мужские Кроссовки Nike Blazer Mid Suede',
            imageUrl: 'img/sneakers/10.jpg',
            id: 10,
        },
        {
            price: 3253,
            name: 'Кроссовки Puma X Aka Boku Future Rider',
            imageUrl: 'img/sneakers/11.jpg',
            id: 11,
        },
        {
            price: 7132,
            name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
            imageUrl: 'img/sneakers/12.jpg',
            id: 12,
        },
    ]

    

    return (
        <div className="flex flex-col">
            <SearchInput>Все товары</SearchInput>
            <div className="flex flex-wrap justify-between p-3">
                {data.map((item) => (
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
