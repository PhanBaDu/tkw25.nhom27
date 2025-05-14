'use client';
import { useEffect } from 'react';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { Spotlight } from '@/components/ui/spotlight';

interface ProductType {
    title: string;
    link: string;
    thumbnail: string;
}

export default function HomePage() {
    const products: ProductType[] = [
        {
            title: 'Ảnh Chủ Tịch Hồ Chí Minh 1',
            link: 'https://repo-cuong.vercel.app/',
            thumbnail: '/landing/ho_chi_minh/1.png',
        },
        {
            title: 'Ảnh Chủ Tịch Hồ Chí Minh 2',
            link: 'https://repo-cuong.vercel.app/',
            thumbnail: '/landing/ho_chi_minh/2.png',
        },
        {
            title: 'Ảnh Chủ Tịch Hồ Chí Minh 3',
            link: 'https://repo-cuong.vercel.app/',
            thumbnail: '/landing/ho_chi_minh/3.png',
        },
        {
            title: 'Ảnh Chủ Tịch Hồ Chí Minh 4',
            link: 'https://repo-cuong.vercel.app/',
            thumbnail: '/landing/ho_chi_minh/4.png',
        },
        {
            title: 'Ảnh Chủ Tịch Hồ Chí Minh 5',
            link: 'https://repo-cuong.vercel.app/',
            thumbnail: '/landing/ho_chi_minh/5.png',
        },
        {
            title: 'Ảnh Chủ Tịch Hồ Chí Minh 6',
            link: 'https://repo-cuong.vercel.app/',
            thumbnail: '/landing/ho_chi_minh/6.png',
        },
        {
            title: 'Ảnh Chủ Tịch Hồ Chí Minh 7',
            link: 'https://repo-cuong.vercel.app/',
            thumbnail: '/landing/ho_chi_minh/7.png',
        },
        {
            title: 'Ảnh Chủ Tịch Hồ Chí Minh 8',
            link: 'https://repo-cuong.vercel.app/',
            thumbnail: '/landing/ho_chi_minh/8.png',
        },
        {
            title: '50 Năm Giải Phóng Miền Nam 1',
            link: 'https://repo-quy.vercel.app/',
            thumbnail: '/landing/50_nam/1.png',
        },
        {
            title: '50 Năm Giải Phóng Miền Nam 2',
            link: 'https://repo-quy.vercel.app/',
            thumbnail: '/landing/50_nam/2.png',
        },
        {
            title: '50 Năm Giải Phóng Miền Nam 3',
            link: 'https://repo-quy.vercel.app/',
            thumbnail: '/landing/50_nam/3.png',
        },
        {
            title: '50 Năm Giải Phóng Miền Nam 4',
            link: 'https://repo-quy.vercel.app/',
            thumbnail: '/landing/50_nam/4.png',
        },
        {
            title: '50 Năm Giải Phóng Miền Nam 5',
            link: 'https://repo-quy.vercel.app/',
            thumbnail: '/landing/50_nam/5.png',
        },
        {
            title: '50 Năm Giải Phóng Miền Nam 6',
            link: 'https://repo-quy.vercel.app/',
            thumbnail: '/landing/50_nam/6.png',
        },
        {
            title: '50 Năm Giải Phóng Miền Nam 7',
            link: 'https://repo-quy.vercel.app/',
            thumbnail: '/landing/50_nam/7.png',
        },
        {
            title: '50 Năm Giải Phóng Miền Nam 8',
            link: 'https://repo-quy.vercel.app/',
            thumbnail: '/landing/50_nam/8.png',
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Spotlight fill="#cd2029" />
            <HeroParallax products={products} />
        </>
    );
}
