// import React from "react";
// import { callouts } from "../../constans/promoSection";

// export default function PromoSection2() {
//   return (
//     <div className="w-full  ">
//       <div className="grid grid-cols-3 md:flex flex-wrap md:max-w-[97%] justify-center gap-14 m-auto shadow-4xl py-5 my-5 ">
//         {callouts.map((card) => (
//           <ul className="lg:flex lg:flex-col gap-3 text-center">
//             <li
//               className="mt-2 w-[330px] h-[270px] m-auto border  border-[#d9d9d9]"
//               key={card.id}
//             >
//               <img
//                 className="w-full h-full object-contain "
//                 src={card.imageOrg || card.imageSrc}
//                 layout="fill"
//                 alt="img"
//               />
//             </li>
//             <a className="hover:text-green text-[#777777] " href="/#">
//               {card.description}
//             </a>
//           </ul>
//         ))}
//       </div>
//     </div>
//   );
// }
import { callouts } from "../../constans/promoSection";

export default function PromoSection2() {
  return (
    <section className="sm:m-5 mx-3">
      <div className="grid grid-cols-3 shadow-4xl overflow-hidden place-items-center cursor-pointer py-5">
        {callouts.map((el) => (
          <>
            <div
              key={el.id}
              className="border w-[85%]  h-32 md:h-[300px] sm:h-[230px] relative border-[#d9d9d9] hover:opacity-75 my-7 mx-7"
            >
              <a href="/#">
                <img
                  className="h-full w-full object-contain "
                  src={el.imageOrg}
                  width={200}
                  height={200}
                  layout="fill"
                  alt="img"
                />
              </a>
              <p className=" text-[#777777] h-8 sm:h-12 sm:text-base text-xs absolute w-full  text-center opacity-80 ">
                {/* {el.name} */}
                <span className="block">{el.description}</span>
              </p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
