'use client';
import React from 'react';
import Spline from '@splinetool/react-spline/next';

const Model = () => {
  return (
    <main className="absolute top-0 left-0 h-[110vh] w-full -z-10">
      <Spline scene="https://prod.spline.design/4WGT0x91kR92YHzL/scene.splinecode" />
    </main>
  );
};

export default React.memo(Model);
