import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import SalesTable from "./SalesTable";

const Sales = () => {
  return (
    <section className="pl-[15px] lg:pl-[46px] pt-[24px] pr-[15px] pb-10">
      <div className="md:flex justify-between items-center">
        <h2 className="text-3xl mb-10 md:m-0">Sales</h2>
        <div className="flex items-center">
          <input type="date" className="input input-bordered" />
          <div className="border w-[18px] h-0 mx-4"></div>
          <input type="date" className="input input-bordered" />
        </div>
      </div>

      <button className="bg-[#097D0D] mt-5 text-base text-white px-4 py-2 rounded">
        Create Invoice
      </button>

      <div className="bg-[#EAEAEA] mt-3 p-8 rounded-2xl">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl">Create Invoice</h3>
          <div>
            <button className="bg-[#097D0D] text-base text-white px-6 py-2 rounded">
              Add Invoice
            </button>
            <button className="ml-12">
              <FaTimesCircle />
            </button>
          </div>
        </div>

        <div className="mt-8 mb-6">
          <label htmlFor="customerName">Customer Name</label>
          <div className="flex gap-5 mt-1">
            <input
              type="text"
              id="customerName"
              className="input input-bordered w-[75%]"
              placeholder="Enter customer name"
            />
            <input type="date" className="input input-bordered w-[25%]" />
          </div>
        </div>

        <SalesTable />
      </div>
    </section>
  );
};

export default Sales;