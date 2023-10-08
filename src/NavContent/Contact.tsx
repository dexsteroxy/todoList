import { FC } from "react"

const Contact: FC =() => {
  return (
    <section id="contact" className="  text-white py-24">
    <div className=" text-center   ">
      <p className=" text-red-600 text-sm font-semibold">Get in touch</p>
      <h1 className=" font-bold text-4xl text-white mt-2">Contact Me</h1>
    </div>

    <div className="contact section mt-12 md:px-3 flex items-center justify-center">
      <div className="contact__containers containers   md:px-0  ">
        <div className="contact__content">
          <div className="contact__info flex flex-col mdl:flex-row md:gap-x-4 gap-y-4 justify-center ">
            {/* ============================================== */}
            <div className="contact__card p-4 rounded-md  text-center bg-amazon_light">
              {/* icon */}
              <div className=" text-2xl mb-2">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h3 className="contact__card-title text-[20px] font-semibold ">Email</h3>
              <span className="contact__card-data text-gray-300 font-medium  text-sm block mb-3">
                amaditochukwu11@gmail..
              </span>
              <span className="contact__button text-sm text-red-600">
                {" "}
                Write me <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>

            {/* ================================================== */}
            <div className="contact__card p-4 rounded-md  text-center bg-amazon_light">
              {/* icon */}
              <div className=" text-2xl mb-2">
              <i className="fa-brands fa-whatsapp"></i>
              </div>
              
              <h3 className="contact__card-title text-[20px] font-semibold ">Whatsapp</h3>
              <span className="contact__card-data text-gray-300  text-sm block mb-3 font-medium px-6">0904 4372 465</span>
              <span className="contact__button text-sm text-red-600">
                {" "}
                Write me <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>

            {/* =================================================================== */}

            <div className="contact__card p-4 rounded-md  text-center bg-amazon_light">
              {/* icon */}
              <div className=" text-2xl mb-2">
              <i className="fa-brands fa-twitter"></i>
              </div>
             
              <h3 className="contact__card-title text-[20px] font-semibold ">Twitter</h3>
              <span className="contact__card-data text-gray-300  text-sm block mb-3 font-medium px-12">Amadi Sixtus</span>
            
              <span className="contact__button text-sm text-red-600">
                {" "}
                Write me <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
            {/* ====================================================== */}
          </div>
        </div>

       
      </div>
    </div>
  </section>
  )
}

export default Contact