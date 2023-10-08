import { FC, useState } from "react";
import { NavLink } from 'react-router-dom';

const Home: FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <section className=" bg-white h-screen pt-[90px] ">
      {/*====================  */}

      {/* ============ */}
      <div className=" flex">
        <div
          className={`bg-amazon_blue  mdl:h-screen p-2 pt-8 ${
            open ? "w-72" : "w-16"
          } duration-300 relative`}
        >
          <i
            className={`fa-solid fa-arrow-left bg-white text-2xl px-2 absolute -right-3 top-9 border border-amazon_blue cursor-pointer rounded-full ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          ></i>

          <div className=" inline-flex">
            <i
              className={`fa-solid fa-user bg-white text-2xl rounded px-2 cursor-pointer block float-left mr-2 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            ></i>
            <h1
              className={`text-white origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              UserName
            </h1>
          </div>

          <div className=" flex items-center rounded-md bg-amazon_light mt-6 px-4 py-2">
            <i className="fa-solid fa-magnifying-glass text-white text-lg -ml-1 block float-left cursor-pointer mr-2"></i>
            <input
              type="search"
              className={`text-base bg-transparent w-full text-white focus:outline-none ${
                !open && "hidden"
              }`}
              placeholder="Search..."
            />
          </div>

          <ul className=" pt-2">
           
            <li className=" text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-amazon_light rounded-md mt-4">
              {" "}
              <i className="fa-solid fa-house text-2xl block float-left"></i>
              <span className={`text-base font-medium flex-1 duration-500 ${!open && "hidden"}`} >General</span>
            </li>
            <NavLink to={'/home/personal'} className=" text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-amazon_light rounded-md mt-4">
              {" "}
              <i className="fa-solid fa-person text-2xl block float-left"></i>
              <span className={`text-base font-medium flex-1 duration-500 ${!open && "hidden"}`} >Personal</span>
            </NavLink>
            <NavLink to={'/home/business'} className=" text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-amazon_light rounded-md mt-4">
              {" "}
              <i className="fa-solid fa-business-time text-2xl block float-left"></i>
              <span className={`text-base font-medium flex-1 duration-500 ${!open && "hidden"}`} >Business</span>
            </NavLink>
            <NavLink to={'/home/list'} className=" text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-amazon_light rounded-md mt-4">
              {" "}
              <i className="fa-solid fa-list text-2xl block float-left"></i>
              <span className={`text-base font-medium flex-1 duration-500 ${!open && "hidden"}`} >Wish List</span>
            </NavLink>
            <NavLink to={'/home/cart'} className=" text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-amazon_light rounded-md mt-4">
              {" "}
              <i className="fa-solid fa-cart-shopping text-2xl block float-left"></i>
              <span className={`text-base font-medium flex-1 duration-500 ${!open && "hidden"}`} >Shopping List</span>
            </NavLink>
          </ul>
        </div>

        <div className=" p-4">
          <h1 className="text-xl font-bold uppercase">Instructions</h1>
          <p className=" text-sm">"Kindly choose a category whether it pertains to personal matters, a list, or business objectives in order to initiate the task at hand."</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
