import React from "react";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
    return (
        <section className='mx-auto flex min-h-screen w-full max-w-7xl items-center justify-start bg-[url("/src/assets/T.B.L_Cover.jpg")] bg-cover bg-center bg-no-repeat p-4 font-black text-black'>
            <div className="text-left text-9xl sm:text-4xl md:text-5xl">
                A Cozy Evening, <br />
                A Perfect Escape, <br />
                Your Quiet Space, <br /> <br />
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
        </section>
    );
};

export default Hero;
