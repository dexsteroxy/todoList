import React, { FC, useState, ChangeEvent } from "react";
import { ITask } from "./Interfaces";
import TodoTask from "./TodoTask";
const  Wish: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(event.target.value);
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };
  return (
    <section>
      <section className=" bg-amazon_blue px-12 md:pt-12 pb-12 lg:pt-32 md:px-20 lg:px-28 flex items-center justify-center">
        <div className=" bg-white mt-24  p-12 lg:w-[800px] w-[318px] md:w-[600px] px-3   container mx-auto xl:-mt-72 shadow-lg flex flex-col items-center justify-center shadow-white rounded-lg md:mt-12 lg:mt-0 ">
          {/* ================================================================================ */}
          <p className=" font-semibold text-2xl">Wish List</p>
          <div className=" flex md:gap-x-6 flex-col md:flex-row gap-y-3">
            <input
              type="text"
              className=" border-2 pl-2 h-[50px] mt-5 md:w-[390px] lg:w-[470px] rounded-md outline-none  "
              placeholder=" Enter your todo here"
              value={task}
              onChange={handleChange}
              name="task"
            />

            <button
              onClick={addTask}
              className=" bg-amazon_blue text-white px-6 w-52 md:w-32 py-2 rounded-md mt-5"
            >
              Add
            </button>
          </div>
          {/* ==================================================================================== */}
          {/* button */}
        </div>
      </section>
      <div className="  ">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </section>
  );
};

export default  Wish;






 




