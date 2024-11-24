import avatar1 from "@/public/images/avatar/avatar-7.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
import avatar9 from "@/public/images/avatar/avatar-9.jpg";
import avatar10 from "@/public/images/avatar/avatar-10.jpg";
import avatar11 from "@/public/images/avatar/avatar-11.jpg";
import avatar12 from "@/public/images/avatar/avatar-12.jpg";
import avatar13 from "@/public/images/avatar/avatar-13.jpg";

import ass from "@/public/images/projects/ass.jpg";
import productify from "@/public/images/projects/productify.jpg";
import uradvisor from "@/public/images/projects/uradvisor.jpg";
import konst from "@/public/images/projects/konst.jpg";
import { faker } from "@faker-js/faker";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Timer,
} from "lucide-react";
import { formatDate } from "@/lib/utils";
import { format } from "date-fns";
import { v4 as uuidv4 } from 'uuid'; // UUID 패키지 임포트

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CheckCircle2,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ChevronDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ChevronRight,
  },
  {
    label: "High",
    value: "high",
    icon: ChevronUp,
  },
];

function getRandomDate(startDate: Date, endDate: Date) {
  const start = startDate.getTime();
  const end = endDate.getTime();
  const randomTime = start + Math.random() * (end - start);
  return new Date(randomTime);
}

export function generateAssignments(numAssign: number) {
  const assignObjects = [];

  for (let j = 0; j < numAssign; j++) {
    assignObjects.push({
      image: faker.image.avatarLegacy(),
      label: faker.person.firstName(),
      value: faker.internet.userName(),
    });
  }

  return assignObjects;
}

export const projects = [
  {
    id: "025679a6-bdc1-4acc-b2a4-6f49432717fe",
    title: "프로티원 단백질쉐이크 파우치형",
    subtitle: "[11월올영픽/1+1] 프로티원 단백질쉐이크 파우치형 40g 4종, 챌린저스 600명 광고 프로젝트",
    description: "[11월올영픽/1+1] 프로티원 단백질쉐이크 파우치형 40g 4종, 챌린저스 600명 광고 프로젝트",
    status: "in progress",
    label: "bug",
    priority: "low",
    percentage: 32,
    assign: [
      { image: avatar1, label: "John Doe", value: "john.doe" },
      { image: avatar2, label: "Jane Smith", value: "jane.smith" },
    ],
    assignDate: formatDate(new Date("2024-10-01"), "yyyy년 MM월 dd일"),
    dueDate: formatDate(new Date("2024-10-15"), "yyyy년 MM월 dd일"),
    isFavorite: true,
    logo: productify,
  },
  {
    id: uuidv4(),
    title: "에버콜라겐 인앤업비오틴 셀 4주",
    subtitle: "[하루 특가] 에버콜라겐 인앤업비오틴 셀 4주 X 에스더버니(+키링파우치 증정) 500명 광고 프로젝트",
    description: "[하루 특가] 에버콜라겐 인앤업비오틴 셀 4주 X 에스더버니(+키링파우치 증정) 500명 광고 프로젝트",
    status: "review",
    label: "bug",
    priority: "medium",
    percentage: 90,
    assign: [
      { image: avatar3, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar4, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: formatDate(new Date("2024-10-05"), "yyyy년 MM월 dd일"),
    dueDate: formatDate(new Date("2024-10-20"), "yyyy년 MM월 dd일"),
    isFavorite: false,
    logo: uradvisor,
  },
  {
    id: uuidv4(),
    title: "어노브 대용량 딥 데미지 헤어 트리트먼트 EX",
    subtitle: "[1&1] 어노브 대용량 딥 데미지 헤어 트리트먼트 EX (집착 헤어팩) 더블/듀오 기획 3종 택1 400명 광고 프로젝트",
    description: "[1&1] 어노브 대용량 딥 데미지 헤어 트리트먼트 EX (집착 헤어팩) 더블/듀오 기획 3종 택1 400명 광고 프로젝트",
    status: "in progress",
    label: "bug",
    priority: "low",
    percentage: 61,
    assign: [
      { image: avatar5, label: "John Doe", value: "john.doe" },
      { image: avatar6, label: "Jane Smith", value: "jane.smith" },
    ],
    assignDate: formatDate(new Date("2024-10-10"), "yyyy년 MM월 dd일"),
    dueDate: formatDate(new Date("2024-10-25"), "yyyy년 MM월 dd일"),
    isFavorite: false,
    logo: konst,
  },
  {
    id: uuidv4(),
    title: "마녀공장 퓨어 클렌징 오일",
    subtitle: "[4년연속1위]마녀공장 퓨어 클렌징 오일 200mlX2 더블기획 300명 광고 프로젝트",
    description: "[4년연속1위]마녀공장 퓨어 클렌징 오일 200mlX2 더블기획 300명 광고 프로젝트",
    status: "completed",
    label: "bug",
    priority: "high",
    percentage: 100,
    assign: [
      { image: avatar7, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar8, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: formatDate(new Date("2024-10-15"), "yyyy년 MM월 dd일"),
    dueDate: formatDate(new Date("2024-10-30"), "yyyy년 MM월 dd일"),
    isFavorite: false,
    logo: ass,
  },
  {
    id: uuidv4(),
    title: "좋은느낌 오리지널 울트라날개 생리대",
    subtitle: "좋은느낌 오리지널 울트라날개 생리대 5종 택 1 (소형 / 중형 / 대형 / 수퍼롱) 400명 광고 프로젝트",
    description: "좋은느낌 오리지널 울트라날개 생리대 5종 택 1 (소형 / 중형 / 대형 / 수퍼롱) 400명 광고 프로젝트",
    status: "review",
    label: "bug",
    priority: "medium",
    percentage: 84,
    assign: [
      { image: avatar9, label: "John Doe", value: "john.doe" },
      { image: avatar10, label: "Jane Smith", value: "jane.smith" },
    ],
    assignDate: formatDate(new Date("2024-10-20"), "yyyy년 MM월 dd일"),
    dueDate: formatDate(new Date("2024-11-05"), "yyyy년 MM월 dd일"),
    isFavorite: false,
    logo: productify,
  },
  {
    id: uuidv4(),
    title: "롬앤 더 쥬시 래스팅 틴트",
    subtitle: "[NEW] 롬앤 더 쥬시 래스팅 틴트 23 Color 300명 광고 프로젝트",
    description: "[NEW] 롬앤 더 쥬시 래스팅 틴트 23 Color 300명 광고 프로젝트",
    status: "completed",
    label: "bug",
    priority: "high",
    percentage: 100,
    assign: [
      { image: avatar11, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar12, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: formatDate(new Date("2024-10-25"), "yyyy년 MM월 dd일"),
    dueDate: formatDate(new Date("2024-11-10"), "yyyy년 MM월 dd일"),
    isFavorite: false,
    logo: uradvisor,
  },
];

export type Project = (typeof projects)[number];