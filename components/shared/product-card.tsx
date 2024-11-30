import React from "react";
import { cn } from '@/lib/utils';
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
interface Props {
    id: number;
    name: string;
    price: number;
    count?: number;
    imageUrl: string;
    className?: string;
  }
export const ProductCard: React.FC<Props> = ({ id, name, price, count, imageUrl,className }) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[268px]">
                <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
                </div>

                    <Title text={name} size="sm" className="text-center mt-2 font-bold"/>
                    <p className="text-sm text-gray-400 mt-2">Chiken Macarella Sous Tomatoes Garlick</p>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-bold"> from {price} Rub</span>
                   <Button variant="secondary" className="text-base - font-bold">
                   <Plus className="w-5 h-5 mr-2"/>
                   ADD
                   </Button> 
                </div>

            </Link>
        </div>
    );
}