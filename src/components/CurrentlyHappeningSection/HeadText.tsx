// import React from "react";

// const textStyle = {
//     fontSize: "65px",
// }
// export default function HeadText() {
//     return(
//         <main>
//             <div className="flex flex-col justify-center items-center">
//                 <p className="flex uppercase text-center" style={textStyle}>
//                     currently happening</p>
//                 <p className="text-center">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//             </div>
//         </main>
//     );
// }

import React from "react";

export default function HeadText() {
    return (
        <main>
            <div className="flex flex-col justify-center items-center">
                <p className="flex uppercase text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl
                pt-20 px-8 sm:px-8 lg:px-20 xl:px-24">
                    currently happening
                </p>
                <p className="text-center text-xs sm:text-xs md:text-sm lg:text-base xl:text-base
                pt-2 px-20 sm:px-20 md:px-16 lg:px-16 xl:px-24">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
            </div>
        </main>
    );
}
