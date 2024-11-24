import { faker } from "@faker-js/faker";

const date = new Date();
const prevDay = new Date().getDate() - 1;
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

// prettier-ignore
const nextMonth = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1)
// prettier-ignore
const prevMonth = date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1)
export const calendarEvents = [
  {
    id: faker.string.uuid(),
    title: "브랜드 캠페인 전략 회의",
    start: date,
    end: nextDay,
    allDay: false,
    extendedProps: {
      calendar: "business",
    },
  },
  {
    id: faker.string.uuid(),
    title: "신제품 출시 준비",
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    allDay: true,
    extendedProps: {
      calendar: "personal",
    },
  },
  {
    id: faker.string.uuid(),
    title: "마케팅 캠페인 기획",
    allDay: true,
    start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
    extendedProps: {
      calendar: "family",
    },
  },
  {
    id: faker.string.uuid(),
    title: "고객 피드백 분석 회의",
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    allDay: true,
    extendedProps: {
      calendar: "meeting",
    },
  },
  {
    id: faker.string.uuid(),
    title: "시장 조사 결과 발표",
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: "holiday",
    },
  },
  {
    id: faker.string.uuid(),
    title: "월간 성과 리뷰",
    start: nextMonth,
    end: nextMonth,
    allDay: true,
    extendedProps: {
      calendar: "business",
    },
  },
];

export const calendarCategories = [
  {
    label: "브랜드 전략",
    value: "business",
    activeClass: "ring-primary-500 bg-primary-500",
    className: " group-hover:border-blue-500",
  },
  {
    label: "개인 개발",
    value: "personal",
    activeClass: "ring-success-500 bg-success-500",
    className: " group-hover:border-green-500",
  },
  {
    label: "시장 조사",
    value: "holiday",
    activeClass: "ring-danger-500 bg-danger-500",
    className: " group-hover:border-red-500",
  },
  {
    label: "고객 분석",
    value: "family",
    activeClass: "ring-info-500 bg-info-500",
    className: " group-hover:border-cyan-500",
  },
  {
    label: "팀 미팅",
    value: "meeting",
    activeClass: "ring-warning-500 bg-warning-500",
    className: " group-hover:border-yellow-500",
  },
  {
    label: "기타",
    value: "etc",
    activeClass: "ring-info-500 bg-info-500",
    className: " group-hover:border-cyan-500",
  },
];

export const categories = [
  {
    label: "브랜드 전략",
    value: "business",
    className: "data-[state=checked]:bg-primary border-primary",
  },
  {
    label: "개인 개발",
    value: "personal",
    className: "data-[state=checked]:bg-success border-success",
  },
  {
    label: "시장 조사",
    value: "holiday",
    className: "data-[state=checked]:bg-destructive  border-destructive",
  },
  {
    label: "고객 분석",
    value: "family",
    className: "data-[state=checked]:bg-info border-info",
  },
  {
    label: "팀 미팅",
    value: "meeting",
    className: "data-[state=checked]:bg-warning border-warning",
  },
  {
    label: "기타",
    value: "etc",
    className: "data-[state=checked]:bg-info border-info",
  },
];

export type CalendarEvent = (typeof  calendarEvents)[number]
export type CalendarCategory = (typeof  calendarCategories)[number]
export type Category = (typeof  categories)[number]