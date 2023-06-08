import React from "react";
import { dataServices } from "../../utils/contants";

const Services = () => {
  return (
    <section>
      <div class="container">
        <div class="flex flex-row">
          {dataServices.map((item, index) => (
            <div className="basis-1/4 text-center" key={index}>
              <p className=" p-3 text-2xl md:text-3xl mb-3 bg-gray-100 text-gray-700 rounded-full w-max mx-auto leading-none">
                {item.icon}
              </p>
              <h3 className="text-xl mb-3 font-semibold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
