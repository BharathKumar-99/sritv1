/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import React from 'react'

export default function ProductItem({ product }) {
    return (
        <div className='card '>
            <Link href={`/product/${product.slug}`}>
                <span>
                    <img
                        src={product.image}
                        alt={product.image}
                        className="rounded shadow photo"
                    />
                </span>
            </Link>
            <div className="flex flex-col px-2 ">
                <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ">
                    <Link href={`/product/${product.slug}`} className='col-span-2 text-start'>
                        <h2 className="text-sm pt-2 text-start  font-medium italic" >{product.name}</h2>
                    </Link>
                    <p className="text-xs pt-2    col-span-1 text-end font-medium italic">${product.price}</p>
                    <p className="text-xs  col-span-3 font-medium multiLinesText">
                        {product.description}
                    </p>
                    <button className='custom-primary-button col-span-2' type='button'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
