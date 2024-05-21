import React, { useEffect, useRef } from "react";
import { data } from "./data";

const App = () => {
  // function for theme change on scroll :-
  const GroupRef = useRef([]);

  const onScroll = (el) => {
    const styles = GroupRef.current
      .map((group, index) => {
        const rect = group.getBoundingClientRect();

        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`;
    document.body.style.color = styles.group.dataset.textcolor;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full h-full overflow-x-hidden relative">
     <div className="lg:w-3/12 hidden md:hidden lg:flex flex-col ml-4 h-full justify-between top-0 fixed text-neutral-900 font-semibold text-[23px] pt-3 pb-5">
        <div>
          <h1>BACKSTAGE TALKS</h1>
        </div>
        
        <div className="font-bold lg:text-2xl md:text-[16px] text-[13px] text-neutral-800">
          <p>Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.</p>
        </div>
      </div>
     {/* <div className="border w-[25%] absolute top-[8%] ml-4">djnde</div> */}
      <div>
        {data.map((group, index) => (
          <div
            key={index}
            ref={(el) => (GroupRef.current[index] = el)}
            data-bgcolor={group.theme.background}
            data-textcolor={group.theme.text}
            className="h-[100vh] w-full overflow-x-hidden"
          >
            <div className="lg:w-[28%] mx-auto lg:mt-20 md:mt-20 mt-32 w-[70%] md:w-[40%]">
              <img className="-z-50" src={group.image} alt="cardimg"/>
            </div>
          </div>
        ))}
         
      </div>
      <center className="text-neutral-900 bg-red-500 py-4 mt-10"><em>This site is made by Anjali..2024</em></center>
    </div>
  );
};

export default App;
