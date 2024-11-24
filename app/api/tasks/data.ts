import avatar from "@/public/images/avatar/avatar-7.jpg";
import img1 from "@/public/images/all-img/headphone-2.png";
import { faker } from "@faker-js/faker";
import { formatDate } from "@/lib/utils";
import { statuses, generateAssignments, priorities } from "../projects/data";
import { demoBoards } from "@/app/api/boards/data";
export const tasks = [
  {
    boardId: demoBoards[0].id,
    id: "2e09c2fc-9d92-4df1-a3cc-bd8c8c51d85c",
    title: "신제품 기획",
    desc: "올리브영 신제품 기획 및 출시 준비.",
    status: "진행중",
    tags: ["기획", "마케팅"],
    priority: "높음",
    assign: [
      {
        name: "김철수",
        image: avatar,
      },
      {
        name: "이영희",
        image: avatar,
      },
    ],
    image: "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/400/10/0000/0020/A00000020277144ko.jpg?l=ko",
    category: "마케팅",
    pages: "0/7",
    messageCount: "05",
    link: "02",
    date: "2024년 10월 3일",
    time: "오후 2:45",
    list: [
      {
        id: "item-1",
        title: "시장 조사",
      },
      {
        id: "item-2",
        title: "브랜드 협업",
      },
      {
        id: "item-3",
        title: "디자인 검토",
      },
    ],
  },
  {
    boardId: demoBoards[1].id,
    id: "8613e1d1-2046-4f0e-bacb-dca57db5b1a9",
    title: "매장 디스플레이 개선",
    desc: "올리브영 매장 디스플레이 개선 프로젝트.",
    status: "완료",
    tags: ["디자인", "운영"],
    priority: "낮음",
    assign: [
      {
        name: "박민수",
        image: avatar,
      },
      {
        name: "최수정",
        image: avatar,
      },
    ],
    image: "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/550/10/0000/0021/B00000021091601ko.jpg?l=ko",
    category: "운영",
    pages: "0/7",
    messageCount: "05",
    link: "02",
    date: "2024년 10월 7일",
    time: "오후 4:30",
    list: [
      {
        id: "item-1",
        title: "디스플레이 분석",
      },
      {
        id: "item-2",
        title: "고객 피드백 수집",
      },
      {
        id: "item-3",
        title: "디자인 수정",
      },
    ],
  },
  {
    boardId: demoBoards[2].id,
    id: "5d4818ef-9f51-48f2-80bc-2df7e50a1f64",
    title: "온라인 마케팅 캠페인",
    desc: "올리브영 온라인 마케팅 캠페인 기획 및 실행.",
    status: "진행중",
    tags: ["마케팅", "디지털"],
    priority: "중간",
    assign: [
      {
        name: "김철수",
        image: avatar,
      },
      {
        name: "이영희",
        image: avatar,
      },
    ],
    image: "",
    category: "디지털 마케팅",
    pages: "0/7",
    messageCount: "05",
    link: "02",
    date: "2024년 10월 12일",
    time: "오후 1:15",
    list: [
      {
        id: "item-1",
        title: "콘텐츠 제작",
      },
      {
        id: "item-2",
        title: "SNS 홍보",
      },
      {
        id: "item-3",
        title: "성과 분석",
      },
    ],
  },
  {
    boardId: demoBoards[2].id,
    id: "e0e88989-0876-4f1f-9e07-3b69e7e6e05c",
    title: "고객 서비스 개선",
    desc: "올리브영 고객 서비스 개선 프로젝트.",
    status: "진행중",
    tags: ["서비스", "고객"],
    priority: "중간",
    assign: [
      {
        name: "박민수",
        image: avatar,
      },
      {
        name: "최수정",
        image: avatar,
      },
    ],
    image: "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/550/10/0000/0021/A00000021111932ko.jpg?l=ko",
    category: "고객 서비스",
    pages: "0/7",
    messageCount: "05",
    link: "02",
    date: "2024년 10월 20일",
    time: "오후 6:50",
    list: [
      {
        id: "item-1",
        title: "고객 설문 조사",
      },
      {
        id: "item-2",
        title: "서비스 프로세스 개선",
      },
      {
        id: "item-3",
        title: "직원 교육",
      },
    ],
  },
];

export type Task = (typeof tasks)[number];

function generateSubTasks() {
  const data = [];
  const subtaskTitles = [
    "시장 조사 및 분석",
    "SNS 콘텐츠 기획",
    "고객 피드백 수집",
    "브랜드 협업 기획",
    "디지털 광고 캠페인 실행",
    "고객 설문조사 준비"
  ];

  for (let i = 0; i < subtaskTitles.length; i++) {
    const assignObjects = [
      {
        name: "김철수",
        image: avatar,
      },
      {
        name: "이영희",
        image: avatar,
      },
    ];

    const newItem = {
      id: `78032cb9-2170-4e6f-bd3b-33f1480b3fd-${i + 1}`,
      title: subtaskTitles[i],
      status: "진행중",
      priority: "중간",
      assign: assignObjects,
      assignDate: formatDate(new Date()),
      dueDate: formatDate(new Date()),
      completed: i % 2 === 0,
      logo: null,
      taskId: tasks[0].id,
    };
    data.push(newItem);
  }

  return data;
}

export const subTasks = generateSubTasks();


export type SubTask = (typeof subTasks)[number];
