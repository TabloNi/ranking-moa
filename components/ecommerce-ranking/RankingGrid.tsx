import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

// 가격 포맷터 함수
const formatPrice = (price: string | null): string => {
  if (!price) return "판매가 정보 없음";
  return `${Number(price).toLocaleString()}원`;
};

interface Product {
  rank: number;
  name: string;
  href: string;
  brand: string;
  original_price: string | null;
  discounted_price: string;
  image: string;
}

interface RankingGridProps {
  products: Product[];
}

const RankingGrid: React.FC<RankingGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      {products.map((product) => (
        <Card key={product.rank} className="flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
          <CardContent className="flex-1 flex flex-col p-4">
            {/* 랭크 표시 */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-600">랭킹 #{product.rank}</span>
              {product.original_price ? (
                <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-600">할인</span>
              ) : (
                <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-600">신상품</span>
              )}
            </div>
            {/* 제품 이미지 */}
            <Link href={product.href} target="_blank" className="flex-1">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain mx-auto mb-4 rounded-lg"
              />
              <h3 className="mt-2 text-lg font-medium text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
            </Link>
            {/* 가격 정보 */}
            <div className="mt-2">
              <span className="text-sm font-semibold text-blue-600">{formatPrice(product.discounted_price)}</span>
              {product.original_price && (
                <span className="ml-2 text-sm text-gray-500 line-through">{formatPrice(product.original_price)}</span>
              )}
            </div>
          </CardContent>
          {/* 추가 링크 */}
          <div className="p-4">
            <Link href={product.href} target="_blank" className="text-blue-500 hover:underline">
              자세히 보기
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default RankingGrid;