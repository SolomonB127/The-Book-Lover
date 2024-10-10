import React from "react";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
    return (
        <section className='flex items-center justify-start min-h-screen w-full p-4 mx-auto bg-[url("/src/assets/T.B.L_Cover.jpg")] bg-cover bg-center bg-no-repeat font-black text-black max-w-7xl bg-yellow-300 font-serif'>
            <div className="text-center sm:text-left">
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl">
                    A Cozy Evening, <br />
                    A Perfect Escape, <br />
                    Your Quiet Space, <br /> <br />
                </div>
                <div className="text-1xl sm:text-6xl">
                    <TypewriterComponent
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Welcome to Your Sanctuary!")
                                .pauseFor(1500)
                                .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 75,
                            deleteSpeed: 50,
                            cursor: "|",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
