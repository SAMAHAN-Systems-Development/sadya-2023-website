import React from "react";

const textStyle = {
    fontSize: "65px",
}
export default function HeadText() {
    return(
        <main>
            <div className="flex flex-col justify-center items-center">
                <p className="flex uppercase " style={textStyle}>
                    currently happening</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </main>
    );
}