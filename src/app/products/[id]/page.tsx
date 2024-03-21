import CardComponent from '@/components/Card/CardComponent'
import Image from 'next/image'
import { abort } from 'process'
import React from 'react'

async function fetchData(id: number) {
    const data = await fetch(`https://dummyjson.com/products/${id}`,
        {
            method: "GET",
            cache: "no-store"
        })
    return data.json()
}

export type ParamProps = {
    params: {
        id: number
    }
}

async function productDetail({ params }: ParamProps) {
    const id = params.id
    const productDetail = await fetchData(id)
    return (
        <> 
            <div className='w-[300px]'>
            <CardComponent
              thumbnail={productDetail.thumbnail}
              title={productDetail.title}
            />
            </div>
        </>
        
    )
}

export default productDetail