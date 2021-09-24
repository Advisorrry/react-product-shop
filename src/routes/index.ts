import { CartPage } from '../pages/CartPage'
import { HomePage } from '../pages/HomePage'

export enum RouteNames {
    HOME = '/',
    CART = '/cart'
}

export interface Iroute {
    path: string
    component: React.ComponentType
    exact?: boolean
}

export const HomeRoute: Iroute[] = [{ path: RouteNames.HOME, exact: true, component: HomePage }]
export const CartRoute: Iroute[] = [{ path: RouteNames.CART, exact: true, component: CartPage }]
