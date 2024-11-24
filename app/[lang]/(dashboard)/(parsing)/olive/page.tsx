"use client";

import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RankingGrid from "@/components/ecommerce-ranking/RankingGrid";
import oliveData from "./olive.json"; // JSON 파일 직접 임포트

interface Product {
  rank: number;
  name: string;
  href: string;
  brand: string;
  original_price: string | null;
  discounted_price: string;
  image: string;
}

interface RankingData {
  scraped_at: string;
  products: Product[];
}

const OliveParsing = () => {
  const [rankings, setRankings] = useState<RankingData[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    // JSON 데이터를 상태에 설정
    setRankings(oliveData);
    if (oliveData.length > 0) {
      setSelectedDate(oliveData[0].scraped_at);
    }
  }, []);

  const currentRanking = rankings.find(
    (ranking) => ranking.scraped_at === selectedDate
  );

  const formatDateTime = (dateTime: string) => {
    const [date, time] = dateTime.split('_');
    const [year, month, day] = date.split('-');
    const [hour, minute, second] = time.split('-');
    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">올리브영 제품 랭킹</h1>

      {/* 날짜 선택 드롭다운 */}
      <div className="mb-4">
        <Select value={selectedDate} onValueChange={setSelectedDate}>
          <SelectTrigger className="w-[260px]">
            <SelectValue placeholder="날짜 선택" />
          </SelectTrigger>
          <SelectContent>
            {rankings.map((ranking, index) => (
              <SelectItem key={index} value={ranking.scraped_at}>
                {formatDateTime(ranking.scraped_at)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* 랭킹 카드 그리드 */}
      <div className="mt-5">
        {currentRanking ? (
          <RankingGrid products={currentRanking.products} />
        ) : (
          <p>선택한 날짜에 해당하는 랭킹 데이터가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default OliveParsing;