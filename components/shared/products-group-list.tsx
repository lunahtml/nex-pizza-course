'use client';
import React from "react";
import { cn } from '@/lib/utils';
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useIntersection } from 'react-use';
import { create } from 'zustand'
import { useCategoryStore } from "@/store/category";
interface Props {
    title: string;
    items: any[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({ 
    title,
    items,
    listClassName,
    categoryId,
    className,
 }) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {

        threshold: 0.4,
      });
      React.useEffect(() => {
        if (intersection?.isIntersecting) {
          setActiveCategoryId(categoryId);
        }
      }, [categoryId, intersection?.isIntersecting, title])
    return (
        <div className={className} id={title} ref={intersectionRef}>
        <Title text={title} size="sm" className="text-center mt-2 font-bold"/>
        <div className={cn('grid grid-cols-3 gap-[50px] mt-4', listClassName)}>
            {items
            .map((product, i) => (
             <ProductCard
             key={product.id}
             id={product.id}
             name={product.name}
             price={product.items[0].price}
             imageUrl={product.imageUrl}
             />
            ))}
        </div>
        </div>
    );
}