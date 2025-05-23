'use client';
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { BackgroundLines } from '@/components/ui/background-lines';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig,
    );
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig,
    );
    return (
        <div
            ref={ref}
            className="h-[300vh] py-40 pb-0 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
            </motion.div>
            <div className="flex-1 w-full flex items-center gap-4 flex-wrap justify-center absolute bottom-50 z-10">
                <Link href="https://repo-quy.vercel.app/">
                    <Button className="cursor-pointer">
                        Đến Trang 50 Năm Giải Phóng Miền Nam
                        <ArrowUpRight />
                    </Button>
                </Link>
                <Link href="https://repo-cuong.vercel.app/">
                    <Button className="cursor-pointer">
                        Đến Trang Chủ Tịch Hồ Chí Minh Kính Yêu
                        <ArrowUpRight />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-50">
            <BackgroundLines>
                <TextGenerateEffect
                    duration={0.2}
                    words={'Chào mừng đến với \n trang giới thiệu'}
                    className="text-foreground text-effect text-2xl md:text-7xl font-bold dark:text-background uppercase"
                />
                <TextGenerateEffect
                    duration={0.2}
                    words={
                        'Khám phá hai chủ đề đặc biệt: Cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh và dấu mốc 50 năm giải phóng miền Nam.'
                    }
                    className="max-w-2xl text-base font-normal md:text-xl mt-2 md:mt-8 dark:text-background text-wrap"
                />
            </BackgroundLines>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-72 md:h-96 w-[20rem] md:w-[30rem] relative shrink-0"
        >
            <a href={product.link} className="block group-hover/product:shadow-2xl ">
                <img
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg"
                    alt={product.title}
                />
            </a>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 rounded-lg bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};
