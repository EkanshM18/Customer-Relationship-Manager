import React, { useState } from "react";
import { Search } from "lucide-react";

export default function CustomerList() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal); 
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-blue-600">Customer List</h1>
      <p className="mt-2 text-lg text-gray-700">
        Here is the list of all customers.
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-row-reverse justify-between gap-2 p-3 w-1/2 border border-gray-300 rounded-md">
        <Search classname= "absoulte left-3 top-1/2"/>
        <input className="focus:outline-none" placeholder="Search Customer..."/>
        </div>

        <button className="text-white bg-gray-700 p-3 w-1/4 rounded-md hover:bg-neutral-950 ml-4" onClick={toggleModal}> + Add Customer </button>
      </div>


      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-slate-200 p-12 rounded-lg shadow-lg w-10/12">
               
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-medium text-2xl ">Add New Customer</h2>
              <button className="font-medium text-xl hover:text-red-500" onClick={toggleModal}> X </button>
            </div>

            <form>

              <div className="mb-4">
                <label className="block  font-medium mb-1">Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Name"/></div>

              <div className="mb-4">
                <label className="block font-medium mb-1">Email</label>
                <input className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Email"/>
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-1">Phone</label>
                <input className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Phone Number"/>
              </div>

              <button className="w-full text-white bg-gray-700 p-3 rounded-md hover:bg-neutral-950" onClick={toggleModal}>Save</button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}

