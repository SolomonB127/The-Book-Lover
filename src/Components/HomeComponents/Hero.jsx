import React from 'react';

const Hero = () => {
    return (
        <section className='bg-[url("/src/assets/T.B.L_Cover.jpg")] bg-center bg-no-repeat bg-cover min-h-screen w-full flex items-center justify-center text-white p-4'>
            <div className='text-center text-3xl sm:text-4xl md:text-5xl'>
                A Good Book, <br />
                A Nice Couch, <br />
                And You.
            </div>
        </section>
    );
}

export default Hero;
