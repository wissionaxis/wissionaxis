'use client';
import React from 'react';
import Spline from '@splinetool/react-spline/next';

const NetworkModel = () => {
    return (
        <main className='absolute lg:h-[110vh] md:[60vh] max-md:hidden -z-10 flex-center w-full top-0 left-0 animateSpin'>
            <Spline
                scene="https://prod.spline.design/FRepuJTDvMx5K5z5/scene.splinecode"
            />
        </main>
    );
}

export default React.memo(NetworkModel);