"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  getGridConfig,
  getYAxisConfig,
  getLabel,
} from "@/lib/appex-chart-options";

const DumbbellChart = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      data: [
        {
          x: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString().split('T')[0],
          y: [10, 30],
        },
        {
          x: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString().split('T')[0],
          y: [20, 40],
        },
        {
          x: new Date(new Date().setDate(new Date().getDate() - 4)).toISOString().split('T')[0],
          y: [15, 35],
        },
        {
          x: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString().split('T')[0],
          y: [25, 45],
        },
        {
          x: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString().split('T')[0],
          y: [30, 50],
        },
        {
          x: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0],
          y: [40, 60],
        },
        {
          x: new Date().toISOString().split('T')[0],
          y: [50, 70],
        },
      ],
    },
  ];

  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      background: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].background})`,
    },
    title: {
      text: "올리브영 최소 / 최대 랭킹",
      align: 'center',
      style: {
        color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 3,
        dumbbellColors: [
          [
            `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
            })`,
            `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].success
            })`,
          ],
        ],
      },
    },
    colors: [`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),

    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: [
          `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].muted})`,
        ],
        inverseColors: true,
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: [
        new Date(new Date().setDate(new Date().getDate() - 6)).toISOString().split('T')[0],
        new Date(new Date().setDate(new Date().getDate() - 5)).toISOString().split('T')[0],
        new Date(new Date().setDate(new Date().getDate() - 4)).toISOString().split('T')[0],
        new Date(new Date().setDate(new Date().getDate() - 3)).toISOString().split('T')[0],
        new Date(new Date().setDate(new Date().getDate() - 2)).toISOString().split('T')[0],
        new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0],
        new Date().toISOString().split('T')[0],
      ],
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
  };
  return (
      <Chart
        options={options}
        series={series}
        type="rangeBar"
        height={height}
        width={"100%"}
      />
  );
};

export default DumbbellChart;
