import FeatureCardComponent from '@/components/Card/FeatureCardComponent';
import React from 'react'

const feature = () => {
    return (
        <>
            <div className='container mx-auto py-10'>
                <h1 className='
                text-2xl
              text-blue-500 
                font-extrabold
                text-center'>
                    Features
                </h1>
                <div className='
                grid 
                grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-4 
                gap-2
                py-5
                px-5
                md:px-5
                lg:px-0
                md:py-10
                lg:py-10'>
                    <FeatureCardComponent/>
                    <FeatureCardComponent/>
                    <FeatureCardComponent/>
                    <FeatureCardComponent/>
                    <FeatureCardComponent/>
                    <FeatureCardComponent/>
                    <FeatureCardComponent/>
                    <FeatureCardComponent/>
                </div>
            </div>
        </>
    )
}

export default feature;