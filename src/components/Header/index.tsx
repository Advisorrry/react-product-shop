import React from 'react'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4">
            <div className="flex items-center">
                <img className="w-10 h-10 mr-3" src="img/logo.svg" alt="Логотип" />
                <div>
                    <h2 className="uppercase text-lg font-black">React Sneakers</h2>
                    <p className="opacity-50">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="flex">
                <li className="mr-8 flex cursor-pointer">
                    <span>1222 ₽</span>
                    <img className="w-5 h-5 ml-2" src="img/cart.svg" alt="Корзина" />
                </li>
                <li className="mr-8 cursor-pointer">
                    <Link to="/favorites">
                        <img className="w-5 h-5" src="img/heart.svg" alt="Закладки" />
                    </Link>
                </li>
            </ul>
        </header>
    )
}
