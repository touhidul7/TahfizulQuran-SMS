import { useOutletContext } from "react-router-dom";
import "./testimonial.css";
const Testimonial = () => {
    const { data } = useOutletContext();
    console.log(data);
  return (
    <div className=" min-h-screen flex items-center justify-cente r">
      <div className="w-[100%] max-w-[800px] mx-auto mt-5 border-[15px] border-[#15803D] p-10 bg-transparent shadow-lg relative">
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
                  value={data.villagePermanent +", "+ data.thanaPreset +", " + data.distPermanent}
                  placeholder="এখানে আপনার ঠিকানা লিখুন"
                  className="border-b-dotted border-none w-[70%] outline-none p-0 pl-2"
                />
              </label>
            </li>
          </ul>
          <p className="pl-0 mt-3">
            উপজেলা পরিষদ, কলসিনা, গাজীপুর এম অঞ্চলিকন:
          </p>
          <p className="pl-0">অর্থবাইতিক প্রশিক্ষণ কোর্স:</p>
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
    </div>
  );
};

export default Testimonial;
