import { useOutletContext } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Testmn = () => {
  const { data } = useOutletContext();
  console.log(data);

  /* Pdf Download */

  // Function to handle the PDF download
  const downloadResultAsPDF = () => {
    const resultSection = document.querySelector(".testimonial");

    // Ensure content is fully visible
    resultSection.style.width = "2000px"; // Adjust width for landscape layout
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
      pdf.save("testimonial.pdf");

      // Reset styles to original
      resultSection.style.width = "";
      resultSection.style.margin = "";
      resultSection.style.overflow = "";
    });
  };

  /*  */
  return (
    <div className=" min-h-screen flex flex-col items-center justify-cente r">
      <div className="w-[100%] max-w-[800px] mx-auto mt-5 border-[15px] border-[#15803D] p-10 bg-transparent shadow-lg relative testimonial">
        <div className="absolute inset-[15px] border-2 border-[#15803D] -z-10"></div>
        <div className="text-center mb-5">
          <img
            src="./logo.jpg"
            alt="Bangladesh Logo"
            className="w-[70px] mx-auto mb-3"
          />
          <h1 className="text-green-700 text-[1.8rem] font-semibold my-1">
            মেধা বিকাশ শিশু নিকেতন এন্ড কুরআন একাডেমি
          </h1>
          <h2 className="text-purple-700 text-[1.3rem] font-medium">
            প্রশংসা পত্র
          </h2>
        </div>
        <div className="text-[1rem] leading-7 text-gray-800">
          <ul className="list-none space-y-3">
            <li>
              <label className="block">
                প্রযান করা যাচ্ছে যে, <strong>জনাব/বেশ</strong>:
                <input
                  type="text"
                  value={data.studentNameBn}
                  placeholder="এখানে কিছু লিখুন"
                  className="border-b-dotted border-none w-[70%] outline-none p-0 pl-2 focus:outline-none focus:border-none"
                />
              </label>
            </li>
            <li>
              <label className="block">
                পিতা :
                <input
                  type="text"
                  placeholder="তোমার বাবার নাম লিখ"
                  value={data.fatherNameBn}
                  className=" border-b-dotted border-none w-[70%] outline-none p-0 pl-2"
                />
              </label>
            </li>
            <li>
              <label className="block">
                মাতা :
                <input
                  type="text"
                  value={data.motherNameBn}
                  placeholder="আপনার মায়ের নাম লিখুন"
                  className="border-b-dotted border-none w-[70%] outline-none p-0 pl-2"
                />
              </label>
            </li>
            <li>
              <label className="block">
                গ্রাম/বাড়ি নং :
                <input
                  type="text"
                  value={
                    data.villagePermanent +
                    ", " +
                    data.thanaPreset +
                    ", " +
                    data.distPermanent
                  }
                  placeholder="এখানে আপনার ঠিকানা লিখুন"
                  className="border-b-dotted border-none w-[70%] outline-none p-0 pl-2"
                />
              </label>
            </li>
          </ul>
          <p className="pl-0 my-3">
            সে {data.classname} এ বার্ষিক পররীক্ষায় GPA{" "}
            <input
              type="text"
              className="outline-none border-none ring-0 focus:outline-none focus:border-none focus:ring-0 m-0 p-0 w-8"
            />{" "}
            পেয়ে উত্তীর্ণ হয়েছে।
          </p>
          <p className="pl-0 mt-3 text-center">
            আমার জানা মতে সে উত্তম চরিত্রের অধিকারী। আমি তার সর্বাঙ্গীন সাফল্য
            কামনা করি।
          </p>
        </div>
        <div className="mt-8 flex justify-between">
          <div className="text-center border-t border-black pt-2 w-[40%]">
            <strong>ভাইস প্রিন্সিপাল</strong>
            <br />
            মেধা বিকাশ শিশু নিকেতন
          </div>
          <div className="text-center border-t border-black pt-2 w-[40%]">
            <strong>প্রিন্সিপাল</strong>
            <br />
            মেধা বিকাশ শিশু নিকেতন
          </div>
        </div>
        <div className="mt-5 text-right text-sm text-gray-600">
          সপরিবেশ করা: ......................................................
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

export default Testmn;
