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
import dd from "@/public/images/projects/dd.png";
import dp from "@/public/images/projects/dp.png"

import { v4 as uuidv4 } from 'uuid'; // UUID 패키지 임포트

export const projects = [
  {
    id: uuidv4(),
    title: "DashCode - Admin Dashboard.",
    projectImage: dp,
    status: "in progress",
    percentage: 100,
    assign: [
      { image: avatar2, label: "John Doe", value: "john.doe" },
      { image: avatar3, label: "Jane Smith", value: "jane.smith" },
      { image: avatar4, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar5, label: "Alice Lee", value: "alice.lee" },
    ],
    isFavourite: true
  },
  {
    id: uuidv4(),
    title: "Acculance SaaS - POS System.",
    projectImage: ass,
    status: "cancelled",
    percentage: 100,
    assign: [
      { image: avatar6, label: "John Doe", value: "john.doe" },
      { image: avatar7, label: "Jane Smith", value: "jane.smith" },
      { image: avatar8, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar9, label: "Alice Lee", value: "alice.lee" },
    ],
    isFavourite: false
  },
  {
    id: uuidv4(),
    title: "프로젝트 A - 웹사이트 개발",
    projectImage: productify,
    status: "완료",
    percentage: 100,
    assign: [
      { image: avatar10, label: "김철수", value: "kim.chulsoo" },
      { image: avatar11, label: "이영희", value: "lee.younghee" },
    ],
    isFavourite: true
  },
  {
    id: uuidv4(),
    title: "프로젝트 B - 모바일 앱",
    projectImage: uradvisor,
    status: "진행 중",
    percentage: 75,
    assign: [
      { image: avatar12, label: "박민수", value: "park.minsu" },
      { image: avatar13, label: "최수정", value: "choi.soojung" },
    ],
    isFavourite: false
  },
  {
    id: uuidv4(),
    title: "프로젝트 C - 데이터 분석",
    projectImage: konst,
    status: "대기 중",
    percentage: 0,
    assign: [
      { image: avatar1, label: "정하나", value: "jung.hana" },
      { image: avatar2, label: "오영수", value: "oh.youngsoo" },
    ],
    isFavourite: true
  },
  // ... 다른 프로젝트들도 동일하게 수정 ...
];
