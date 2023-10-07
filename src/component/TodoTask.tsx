import { ITask } from "./Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}
const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="   ">
      {/* <div className=" flex items-center flex-col gap-5 justify-center flex-wrap bg-pink-400 border mt-6 ">

        <div className=" text-white bg-amazon_blue w-[200px] flex flex-wrap ">
         
        </div>

       

        <button
        onClick={() => {
          completeTask(task.taskName);
        }}
        className=" text-white bg-amazon_blue px-4 py-1 hover:bg-amazon_light transition-all rounded-md border hover:text-red-600"
      >
        <i className="fa-solid fa-trash text-sm"></i>
      </button>
      </div> */}














<div className=" flex items-center justify-center">
<div className="flex flex-wrap items-center justify-center gap-5 bg-white shadow-md mb-6 shadow-white border mt- p- lg:w-[800px] md:w-[600px] w-[300px]">

<div className="text-white bg-amazon_blue lg:w-[600px] md:w-[500px] w-[296px] p-2">
  <div className="w-full max-w-[100%] overflow-hidden">
    <div className="break-words">
    {task.taskName}
    </div>
  </div>
</div>

<button
  onClick={() => {
    completeTask(task.taskName);
    
  }}
  className="text-white bg-amazon_blue px-4 py-1 hover:bg-amazon_light transition-all rounded-md border hover:text-red-600"
>
  <i className="fa-solid fa-trash text-sm"></i>
</button>
</div>
</div>











      {/* =============================================================================================== */}
    
    </div>
  );
};

export default TodoTask;
