/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useOutletContext } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./testimonial.css";
import axios from "axios";
import { useEffect, useState } from "react";

const AdmitCard = () => {
  const { data } = useOutletContext();
  const [classes, setClasses] = useState(null);
  console.log(classes);
  const backendApiUrl = import.meta.env.VITE_API_BASE_URL;
  /* Pdf Download */

  useEffect(() => {
    axios
      .get(`${backendApiUrl}/getCourse/${data.classname}`)
      .then(function (response) {
        setClasses(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [backendApiUrl]);

  // Function to handle the PDF download
  const downloadResultAsPDF = () => {
    const resultSection = document.querySelector(".testimonial");

    // Ensure content is fully visible
    resultSection.style.width = "1000px"; // Adjust width for landscape layout
    resultSection.style.height = "710px"; // Adjust width for landscape layout
    resultSection.style.margin = "auto"; // Center the content
    resultSection.style.overflow = "visible"; // Ensure nothing is hidden

    html2canvas(resultSection, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Initialize jsPDF in landscape mode
      const pdf = new jsPDF("l", "mm", "a4"); // 'l' specifies landscape

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // Add image to the PDF and scale it to fit the page
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("admitcard.pdf");

      // Reset styles to original
      resultSection.style.width = "";
      resultSection.style.margin = "";
      resultSection.style.overflow = "";
    });
  };

  /*  */
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <div className="w-[1000px] flex flex-col justify-between h-[710px] mx-auto mt-5 border-[15px] border-[#15803D] p-10 bg-transparent shadow-lg relative testimonial">
        <div className="absolute inset-[15px] border-2 border-[#15803D] -z-10"></div>
        <div>
          <div className="text-center mb-2">
            <img
              src="./logo.jpg"
              alt="Bangladesh Logo"
              className="w-[70px] mx-auto mb-3"
            />
            <h1 className="text-green-700 text-[1.8rem] font-semibold my-1">
              মেধা বিকাশ শিশু নিকেতন এন্ড কুরআন একাডেমি
            </h1>
            <h2 className="text-purple-700 text-[1.3rem] font-medium">
              প্রবেশ পত্র
            </h2>
          </div>
          <div className="idcard-content">
            <div className="flex w-full justify-between">
              {/* Information Col 1 */}
              <div className=" flex flex-col justify-start w-[40%] gap-2">
                <div className="flex items-center">
                  <span className="w-1/2 font-bold">Student Name</span>
                  <span className="w-1/2 text-left">
                    <b>:</b> {data.studentNameEn}
                  </span>
                </div>

                <div className="flex items-center">
                  <span className="w-1/2 font-bold">Father's Name</span>
                  <span className="w-1/2 text-left">
                    <b>:</b> {data.fatherNameEn}
                  </span>
                </div>

                <div className="flex items-center">
                  <span className="w-1/2 font-bold">Mother's Name</span>
                  <span className="w-1/2 text-left">
                    <b>:</b> {data.motherNameEn}
                  </span>
                </div>
              </div>
              {/* Information Col 2 */}

              <div className=" flex flex-col justify-start w-[40%] gap-2">

              <div className="flex items-center">
                  <span className="w-1/2 font-bold">ID</span>
                  <span className="w-1/2 text-left">
                    <b>:</b> {data.studentId}
                  </span>
                </div>

                <div className="flex items-center">
                  <span className="w-1/2 font-bold">Gender</span>
                  <span className="w-1/2 text-left">
                    <b>:</b> {data.gender}
                  </span>
                </div>

                <div className="flex items-center">
                  <span className="w-1/2 font-bold">Student Class</span>
                  <span className="w-1/2 text-left">
                    <b>:</b> {data.classname}
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="subjects-section flex flex-col justify-center w-full">
          <div className="heading text-center text-2xl font-bold py-4">
            NAME OF SUBJECTS
          </div>
          {/* Make the grid box contents center course*/}
          <div className="subjects grid grid-cols-3 gap-2">
            {classes?.map((courses, i) => (
              <div key={i} className="w-3/3 text-left font-medium">
                {courses.course}
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="Content pt-2">
            <div className="hading font-bold mb-1">Directions:</div>
            <div className=" pl-4">
              <p>
                1. The Examinee must bring the Admit Card in the Examination
                Hall and without any electronic device.
              </p>
              <p>
                2. The examinee must sign the attendance sheet for each subject,
                or they will be marked absent.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <div className="text-center border-t border-black pt-2 w-[40%]">
              <strong>পরিচালক</strong>
              <br />
              মেধা বিকাশ শিশু নিকেতন
            </div>
            <div className="text-center border-t border-black pt-2 w-[40%]">
              <strong>প্রধান শিক্ষক</strong>
              <br />
              মেধা বিকাশ শিশু নিকেতন
            </div>
          </div>
        </div>
      </div>
      <button
        className="py-2 px-6 rounded-lg bg-[#2450c0] hover:bg-[#2a478f] text-white my-8"
        onClick={downloadResultAsPDF}
      >
        Download
      </button>
    </div>
  );
};

export default AdmitCard;
