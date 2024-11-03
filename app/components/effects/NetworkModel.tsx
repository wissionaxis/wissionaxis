'use client';
import React from 'react';
import Spline from '@splinetool/react-spline/next';

const NetworkModel = () => {
    return (
        <main className='lg:w-[25%] relative'>
            <Spline
                scene="https://prod.spline.design/fmFIPVbrxgsx4pFv/scene.splinecode"
            />
        </main>
    );
}

export default React.memo(NetworkModel);