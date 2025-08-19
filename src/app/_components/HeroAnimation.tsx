'use client';
import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../../../public/Working.json';

export default function HeroAnimation() {
    return <Lottie loop animationData={lottieJson} play style={{ width: 300, height: 300 }} />;
}
