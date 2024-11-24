import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import DocCard from "./doc-card";

const data = [
  {
    id: 1,
    title: "마케팅계약.pdf",
    text: "올리브영 마케팅 프로젝트 관련 계약서입니다. 모든 조건과 조항이 포함되어 있습니다. 이 계약서는 양 당사자 간의 권리와 의무를 명확히 규정하고 있으며, 프로젝트의 성공적인 수행을 위한 필수적인 문서입니다.",
    last_view: "2024.10.01",
    time: "3:15PM",
    file_type: "PDF"
  },
  {
    id: 2,
    title: "9월랭킹표본.docx",
    text: "9월달 마케팅 캠페인에 사용된 표본 집단의 랭킹 데이터입니다. 이 데이터는 다양한 분석을 통해 캠페인의 효과를 측정하고, 향후 전략 수립에 중요한 역할을 합니다.",
    last_view: "2024.10.05",
    time: "11:00AM",
    file_type: "XLSX"
  },
  {
    id: 3,
    title: "광고캠페인.pdf",
    text: "최근 광고 캠페인의 성과를 분석한 보고서입니다. 이 보고서는 캠페인의 주요 성과 지표를 포함하고 있으며, 향후 개선점을 제시합니다. 이를 통해 마케팅 전략의 효율성을 높일 수 있습니다.",
    last_view: "2024.10.10",
    time: "2:45PM",
    file_type: "DOCX"
  },
  {
    id: 4,
    title: "시장조사결.pdf",
    text: "올리브영의 시장 조사 결과를 정리한 문서입니다. 이 문서는 시장의 현재 동향과 소비자 선호도를 분석하여, 기업의 전략적 방향성을 제시합니다. 이를 통해 경쟁력을 강화할 수 있습니다.",
    last_view: "2024.10.15",
    time: "9:30AM",
    file_type: "PDF"
  },
  {
    id: 5,
    title: "브랜드전략.docx",
    text: "브랜드 전략 회의에서 논의된 내용을 기록한 회의록입니다. 이 문서는 브랜드의 장기적인 목표와 실행 계획을 포함하고 있으며, 팀 간의 협업을 촉진하는 중요한 자료입니다.",
    last_view: "2024.10.20",
    time: "4:00PM",
    file_type: "DOCX"
  },
  {
    id: 6,
    title: "소셜미디어.docx",
    text: "소셜 미디어 플랫폼에서의 브랜드 인지도를 분석한 보고서입니다. 이 보고서는 다양한 소셜 미디어 채널에서의 사용자 반응과 참여도를 평가하여, 마케팅 전략의 효과를 측정합니다.",
    last_view: "2024.10.25",
    time: "1:30PM",
    file_type: "PDF"
  },
  {
    id: 7,
    title: "경쟁사분석.xlsx",
    text: "경쟁사의 마케팅 전략과 성과를 분석한 데이터입니다. 이 데이터는 경쟁사의 강점과 약점을 파악하여, 자사의 전략적 우위를 확보하는 데 중요한 역할을 합니다.",
    last_view: "2024.10.30",
    time: "10:00AM",
    file_type: "XLSX"
  },
];
export type Document = (typeof data)[number];
const Documents = () => {

  return (
    <Card>
      <CardHeader
        className="flex-col lg:flex-row lg:items-center gap-4 border-none mb-3"
      >
        <div className="flex-1">
          <div className="text-xl font-medium text-default-900">프로젝트 문서</div>
          <div className="text-sm font-medium text-default-600">
            전체 <span className="text-default-700">7개</span>의 파일, <span className="text-default-700">19MB</span> 공간 사용
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[208px]">
            <Input type="text" placeholder="문서 검색" />
          </div>
          <Button>
            <Plus className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
            문서 추가
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-6">
          {data.map(item => <DocCard key={item.id} item={item} />)}
        </div>
      </CardContent>

    </Card>
  );
};

export default Documents;