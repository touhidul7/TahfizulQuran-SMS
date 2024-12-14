/* eslint-disable react/no-unescaped-entities */

import { useOutletContext } from "react-router-dom";

const Result = () => {
    const {data} = useOutletContext();
    console.log(data);
    
  return (
    <div className="container mx-auto my-10">
      {/* Result Header */}
      <div className="bg-gray-100 p-5 rounded-lg mb-8 text-center">
        <h1 className="text-xl font-bold">Your PSC Results</h1>
      </div>

      {/* Student Information */}
      <div className="mb-8">
        <div className="flex  justify-around gap-8 w-full px-16">
          <div className="w-full md:w-1/2">
            <p><strong>Name:</strong></p>
            <p><strong>Roll No:{data.studentId}</strong></p>
            <p><strong>Board:</strong></p>
            <p><strong>Group:</strong></p>
            <p><strong>Type:</strong></p>
          </div>
          <div className="w-full md:w-1/2">
            <p><strong>Father's Name:</strong></p>
            <p><strong>Mother's Name:</strong></p>
            <p><strong>Date of Birth:</strong></p>
            <p><strong>Result:</strong></p>
            <p><strong>Institute:</strong></p>
          </div>
        </div>
      </div>

      {/* GPA Information */}
      <div className="alert alert-info text-center bg-blue-100 text-blue-800 p-4 rounded-md">
        <strong>GPA:</strong>
      </div>

      {/* Grade Sheet Table */}
      <h3 className="text-center text-xl font-semibold mb-6">Grade Sheet</h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Serial No</th>
              <th className="py-2 px-4">Subject</th>
              <th className="py-2 px-4">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">BANGLA</td>
              <td className="border px-4 py-2">A-</td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">ENGLISH</td>
              <td className="border px-4 py-2">A-</td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">MATHEMATICS</td>
              <td className="border px-4 py-2">B</td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">4</td>
              <td className="border px-4 py-2">BANGLADESH AND GLOBAL STUDIES</td>
              <td className="border px-4 py-2">A-</td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">5</td>
              <td className="border px-4 py-2">ISLAM AND MORAL EDUCATION</td>
              <td className="border px-4 py-2">A</td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">6</td>
              <td className="border px-4 py-2">SCIENCE</td>
              <td className="border px-4 py-2">A</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Search Again Button */}
      <div className="text-center mt-8">
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
          Search Again
        </a>
      </div>
    </div>
  );
};

export default Result;
