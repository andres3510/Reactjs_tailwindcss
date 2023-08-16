import {useContext} from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import {ShoppingCartContext} from "../../Context/index.jsx";
import './style.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    console.log('PRODUCT TO SHOW: ', context.productToShow)
    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounder-lg bg-white`}
            >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
                </div>
            </div>
            <figure>
                <img src={context.productToShow.images} alt={context.productToShow.title} />
            </figure>
        </aside>
    )
}

export default ProductDetail;