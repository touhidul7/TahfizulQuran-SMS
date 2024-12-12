import { useState } from "react";

const PayFee = () => {
  const [studentID, setStudentID] = useState("");
  const [classname, setClassname] = useState("");
  const [studentDetails, setStudentDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = () => {
    // Fetch the array from localStorage
    const storedData = JSON.parse(localStorage.getItem("formDataArray")) || [];

    // Find the student by ID and class
    const foundStudent = storedData.find(
      (student) => student.studentid == studentID && student.classname === classname
    );

    if (foundStudent) {
      setStudentDetails(foundStudent);
      setErrorMessage("");
    } else {
      setStudentDetails(null);
      setErrorMessage("No student found with the provided ID and class.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-center mb-4">Search Student Details</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Student ID:</label>
          <input
            type="text"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Student ID"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Class:</label>
          <input
            type="text"
            value={classname}
            onChange={(e) => setClassname(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Class Name"
          />
        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-full"
        >
          Search
        </button>

        {errorMessage && (
          <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
        )}

        {studentDetails && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Student Details:</h3>
            <p><strong>Name:</strong> {studentDetails.studentNameEn || "N/A"}</p>
            <p><strong>Student ID:</strong> {studentDetails.studentid || "N/A"}</p>
            <p><strong>Class:</strong> {studentDetails.classname || "N/A"}</p>
            <p><strong>Birth Certificate No.:</strong> {studentDetails.birthCertificate || "N/A"}</p>
            <p><strong>Phone:</strong> {studentDetails.motherMobile || "N/A"}</p>
            <p><strong>Admission Date:</strong> {studentDetails.admissiondate || "N/A"}</p>
            <p><strong>Amount Paid:</strong> {studentDetails.amount || "N/A"} BDT</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayFee;
