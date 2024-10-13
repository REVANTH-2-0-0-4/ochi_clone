import React from "react";

function About() {
  return (
    <div className='w-full   bg-[#CDEA68] rounded-t-[1.5vw]   text-black tracking-loose leading-none  font-["Neue_Montreal"]'>
      <div className=" pl-[6vw] pr-[16vw] pt-[5vw] pb-[5vw]  text-[3.5vw]">
        <h1>
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to <u>raise funds</u>, <u>sell products</u>,{" "}
          <u>ex­plain com­plex ideas</u>,and <u> hire great peo­ple</u>.
        </h1>
      </div>
      <div className="border-t-[0.1vw] border-[#B3CC5F]  flex justify-center py-[3vw] px-[7vw] text-[1.2vw] gap-[40vw] ">
        <div>What you can expect: </div>
        <div className="flex justify-between gap-[9vw] ">
          <div className="w-[15vw] leading-[1.3vw] ">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.{" "}
            <div className="py-8">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </div>
          </div>
          <div className="flex flex-col leading-[2vw] py-[8vw]">
           
            S :
            {["Instagram", "Behance", "Facebook", "Linkedin"].map(
              (item, idx) => {
                return (
                  <a
                    key={idx}
                    className="text-[1.2vw] font-light hover:underline underline-offset-6 leading-[1.5vw] capitalize block"
                  >
                    {item}
                  </a>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
