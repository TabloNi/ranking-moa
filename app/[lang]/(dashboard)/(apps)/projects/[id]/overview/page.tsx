"use client";
import OverdueTask from "./overdue-task";
import ProjectBudget from "./project-budget";
import ProjectDeadline from "./project-deadline";
import ProjectProgress from "./project-progress";
import ReportChart from "./report-chart";
import TopContributer from "./top-contributer";
import UpcomingDeadline from "./upcoming-deadlines";
import WorkloadChart from "./workload";
import WorksNote from "./works-note";
import DumbbellChart from "../../../../../../../app/[lang]/(dashboard)/(chart)/(appex-charts)/charts-appex-column/dumbbell";

const Overview = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 xl:col-span-5 2xl:col-span-3">
          <ProjectDeadline />
        </div>

        <div className="col-span-12 lg:col-span-6 xl:col-span-7 2xl:col-span-9">
                <ReportChart />
        </div>

      </div>
      <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-12 xl:col-span-12 2xl:col-span-12">

        <DumbbellChart  />
        </div>

      </div>
  
    </div>
  );
};

export default Overview;
