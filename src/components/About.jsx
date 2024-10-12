import React from "react";

function About() {
  return (
    <div className='w-full   bg-[#CDEA68] rounded-t-[1.5vw] text-black tracking-loose leading-none  font-["Neue_Montreal"]'>
      <div className=" pl-16 pr-[16vw] pt-28 pb-20  text-[3.5vw]">
        <h1>
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to <u>raise funds</u>, <u>sell products</u>,{" "}
          <u>ex­plain com­plex ideas</u>,and <u> hire great peo­ple</u>.
        </h1>
      </div>
      <div className="border-t-[0.1vw]  border-[#B3CC5F]  flex justify-between py-[2vw] px-20 text-[1.2vw]">
        <div >What you can expect: </div>
        <div className="flex ">
          <div className="w-[13vw] ">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people. We believe the mix of
            strategy and design (with a bit of coffee) is what makes your
            message clear, convincing, and captivating.
          </div>
          <div className="w-[5vw]  py-[10vw]">S: Instagram Behance Facebook Linkedin</div>
        </div>
      </div>
    </div>
  );
}

export default About;
