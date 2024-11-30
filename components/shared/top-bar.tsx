import React from "react";
import { cn } from '@/lib/utils';
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { Container } from "./container";
interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn(className, "sticky top-0 z-10 py-5 shadow-lg shadow-black/5 bg-white flex items-center justify-between")}>
            <Container className="flex items-center justify-between mx-auto max-w-[1280px] top-bar-container">
            <Categories />
            <SortPopup/>
            </Container>
        </div>
    );
}