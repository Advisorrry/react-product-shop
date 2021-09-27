import React from 'react'

export const ProductCard = () => {
    return (
        <div className="bg-white-100 shadow-md rounded-lg border-gray-500 p-5 w-64 mb-5 transition transform hover:-translate-y-2 motion-reduce:transform-none cursor-pointer">
            <img className="mx-auto" src="img/sneakers/1.jpg" alt="" width="133" height="112" />
            <div className="">
                <blockquote>
                    <p className="text-base	font-semibold">
                        Мужские Кроссовки Nike Blazer Mid Suede
                    </p>
                </blockquote>
                <figcaption className="font-medium flex justify-between ">
                    <div className="flex flex-col">
                        <div className="text-cyan-600">Цена:</div>
                        <div className="text-base font-semibold">12 999 руб.</div>
                    </div>
                    <button>
                        <img src="img/add-btn.svg" alt="" />
                    </button>
                </figcaption>
            </div>
        </div>
    )
}
