import { useOutletContext } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./testimonial.css";


const Testmn = () => {

  const { data } = useOutletContext();

  /* Pdf Download */

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
      <div className="w-[1000px] h-[710px] mx-auto mt-5 border-[15px] border-[#15803D] p-10 bg-transparent shadow-lg relative testimonial">
        <div className="absolute inset-[15px] border-2 border-[#15803D] -z-10"></div>
        <div className="text-center mb-5">
          {/* <img
            src="./logo.jpg"
            alt="Bangladesh Logo"
            className="w-[70px] mx-auto mb-3"
          /> */}
          <h1 className="text-[#2DB75B] text-[30px] leading-tight font-semibold mb-">
          মেধা বিকাশ শিশু নিকেতন এন্ড কোরআন একাডেমি
          </h1>
          <h1 className="text-[#1A56DB] text-[25px] font-semibold my-1">
          Medha Bikash Shisho Niketan And Quran Academy
          </h1>
          <div className="text-center  font-[450] text-md">
            <p>স্থাপিতঃ ২০<span className="font-poppins">১</span>৮ ইং,</p>
            <p>বিদ্যালয় কোডঃ ৭০৫০৮৩৩২০</p>
            <p>৩৩ নং ওয়ার্ড মহানগর, রংপুর।</p>
          </div>
          
        </div>
        <div className="text-[1rem] leading-7 text-gray-800">
        <h2 className="text-purple-700 text-[1.3rem] font-medium text-center">
            প্রশংসা পত্র
          </h2>
          <div className=" flex gap-2 flex-wrap justify-center py-20">
            <div>
              <label className="block">
                প্রযান করা যাচ্ছে যে, <strong>জনাব/বেশ</strong>: <span className="mb-10">{data.studentNameBn}</span>
                {/* <input
                  type="text"
                  value={data.studentNameBn}
                  placeholder="এখানে কিছু লিখুন"
                  className="border-b-dotted border-none w-[70%] outline-none p-0 pl-2 focus:outline-none focus:border-none"
                /> */}
              </label>
            </div>
            <div>
              <label className="block">
                পিতা : {data.fatherNameBn}
               
              </label>
            </div>
            <div>
              <label className="block">
                মাতা : {data.motherNameBn}
               
              </label>
            </div>
            <div>
              <label className="block">
                গ্রাম/বাড়ি নং : {
                    data.villagePermanent +
                    ", " +
                    data.thanaPreset +
                    ", " +
                    data.distPermanent
                  }
              </label>
            </div>
            <p className="pl-0">
            সে {data.classname} এ বার্ষিক পররীক্ষায় GPA{" "}
            <input
              type="text"
              placeholder="0.00"
              className="outline-none overflow-visible border-none ring-0 focus:outline-none focus:border-none focus:ring-0 m-0 p-0 w-9 h-[30px]"
            /> {" "}
            পেয়ে উত্তীর্ণ হয়েছে।
          </p>
          </div>
          
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