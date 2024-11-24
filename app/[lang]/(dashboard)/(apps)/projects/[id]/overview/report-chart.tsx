"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, subDays } from 'date-fns';
import { useState } from 'react';

// Define a type for the keys of seriesData
type WeekKey = 'this_week' | 'last_week';

const ReportChart = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();

  const getLabel = (colors: string) => ({
    style: {
      colors: colors,
      fontFamily: "Inter",
    },
  });
  const getGridConfig = (colors: string) => ({
    show: true,
    borderColor: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
      })`,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    strokeDashArray: 0,
    position: "back",
    row: {
      colors: undefined,
      opacity: 0.5,
    },
    column: {
      colors: undefined,
      opacity: 0.5,
    },
    padding: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 10,
    },
  });


  const theme = themes.find((theme) => theme.name === config);

  // Generate the last 7 days including today
  const today = new Date();
  const categories = Array.from({ length: 7 }, (_, i) =>
    format(subDays(today, i), 'yy년 MM월 dd일')
  ).reverse();

  // Update the state to use the WeekKey type
  const [selectedWeek, setSelectedWeek] = useState<WeekKey>('this_week');

  const seriesData = {
    this_week: [
      { name: "올리브영", data: [15, 10, 20, 18, 25, 22, 28] },
      { name: "무신사", data: [25, 35, 30, 40, 38, 45, 42] },
      { name: "쿠팡", data: [40, 35, 45, 42, 44, 46, 39] },
    ],
    last_week: [
      { name: "올리브영", data: [12, 14, 19, 17, 23, 20, 26] },
      { name: "무신사", data: [22, 32, 28, 38, 35, 42, 39] },
      { name: "쿠팡", data: [37, 32, 42, 39, 41, 43, 36] },
    ],
    // Add more data for other weeks if needed
  };

  // Function to get the date range for the past weeks
  const getDateRange = (weeksAgo: number) => {
    const start = format(subDays(today, weeksAgo * 7 + 6), 'MM.dd');
    const end = format(subDays(today, weeksAgo * 7), 'MM.dd');
    return `${start}~${end}`;
  };

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2],
      curve: "straight",
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },

    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    xaxis: {
      type: "category",
      categories: categories,
      axisTicks: {
        show: false,
      },

      lines: {
        show: true,
      },
      labels: getLabel(
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`
      ),
    },
    yaxis: {
      axisTicks: {
        show: false,
      },

      lines: {
        show: true,
      },
      labels: getLabel(
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`
      ),
    },
    legend: {
      labels: {
        colors: `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
          })`,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: isRtl ? 5 : -5
      }
    },
  };
  return (
    <Card>
      <CardHeader className="mb-0 border-none pt-6 pl-7 pb-0 flex-row items-center justify-between">
        <CardTitle>주단위 평균 랭킹</CardTitle>
        <div className="w-[190px]">
          <Select defaultValue="this_week" onValueChange={(value) => setSelectedWeek(value as WeekKey)}>
            <SelectTrigger>
              <SelectValue placeholder="주차를 선택해 주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this_week">이번 주 ({getDateRange(0)})</SelectItem>
              <SelectItem value="last_week">1주 전 ({getDateRange(1)})</SelectItem>
              <SelectItem value="two_weeks_ago">2주 전 ({getDateRange(2)})</SelectItem>
              <SelectItem value="three_weeks_ago">3주 전 ({getDateRange(3)})</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Chart
          options={options}
          series={seriesData[selectedWeek]}
          type="line"
          height={height}
          width={"100%"}
        />
      </CardContent>
    </Card>
  );
};

export default ReportChart;
