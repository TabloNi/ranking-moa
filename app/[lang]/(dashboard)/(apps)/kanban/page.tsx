import {
  getBoards,
  getTasks,
  getSubtasks,
} from "@/config/project-config";
import KanbanBreadCrumbs from "./bread-crumbs";
import TaskBoard from "@/components/task-board";

const Kanban = async () => {
  const boards = await getBoards();
  const tasks = await getTasks();
  const subTasks = await getSubtasks();
  return (
    <>
      <div className="flex flex-wrap mb-7">
        <div className="text-xl font-medium text-default-900 flex-1">
          칸반 보드
        </div>
        <div className="flex-none">
          <KanbanBreadCrumbs />
        </div>
      </div>
      <TaskBoard
        boards={boards}
        tasks={tasks}
        subTasks={subTasks}
      />
    </>
  );
};

export default Kanban;
