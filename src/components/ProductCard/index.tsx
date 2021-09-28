import React from 'react'

interface ProductCardProps { 
    price: number
    imageUrl: string
    name: string
}


export const ProductCard:React.FC<ProductCardProps> = ({name, price, imageUrl}) => {
    return (
        <div className="bg-white-100 shadow-md rounded-lg border-gray-500 p-5 w-64 mb-5 transition transform hover:-translate-y-2 motion-reduce:transform-none cursor-pointer">
            <img className="mx-auto" src={imageUrl} alt={name} width="133" height="112" />
            <div className="">
                <blockquote>
                    <p className="text-base	font-semibold">
                        {name}
                    </p>
                </blockquote>
                <figcaption className="font-medium flex justify-between ">
                    <div className="flex flex-col">
                        <div className="text-cyan-600">Цена:</div>
                        <div className="text-base font-semibold">{price} руб.</div>
                    </div>
                    <button>
                        <img src='img/add-btn.svg' alt='Добавить в корзину' />
                    </button>
                </figcaption>
            </div>
        </div>
    )
}
