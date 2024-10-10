import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css'; // Import Swiper's core CSS
import 'swiper/css/navigation'; // Import Swiper navigation (optional if you want default styles)

// Custom Slider Button Component
const SliderBtn = () => {
    const swiper = useSwiper(); // Get the swiper instance

    return (
        <div className="flex justify-center space-x-4 mt-4">
            {/* Previous button */}
            <button
                onClick={() => swiper.slidePrev()}
                className="bg-gray-800 text-white py-2 px-4 rounded-lg"
            >
                {'<'}
            </button>

            {/* Next button */}
            <button
                onClick={() => swiper.slideNext()}
                className="bg-gray-800 text-white py-2 px-4 rounded-lg"
            >
                {'>'}
            </button>
        </div>
    );
};

const Recommendations = () => {
    const books = [
        { id: 1, color: 'bg-red-300' },
        { id: 2, color: 'bg-blue-300' },
        { id: 3, color: 'bg-yellow-300' },
        { id: 4, color: 'bg-gray-300' },
        { id: 5, color: 'bg-green-300' },
        { id: 6, color: 'bg-black' },
        { id: 7, color: 'bg-teal-300' },
        { id: 8, color: 'bg-violet-300' },
    ];

    return (
        <section className="mt-10">
            <div className="flex justify-around items-center">
                <span className="font-bold">|</span>
                <h1 className="font-bold text-4xl">Recommendations</h1>
                <span className="font-bold">|</span>
            </div>

            {/* Swiper for mobile */}
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="block md:hidden mt-8"
            >
                {books.map(book => (
                    <SwiperSlide key={book.id}>
                        <div className={`w-48 h-72 mx-auto ${book.color}`}></div>
                    </SwiperSlide>
                ))}

                {/* Custom Slider Buttons */}
                <SliderBtn />
            </Swiper>

            {/* Grid for desktop */}
            <div className="hidden md:grid grid-cols-4 gap-8 mt-11 max-w-screen-lg mx-auto px-4">
                {books.map(book => (
                    <div key={book.id} className={`w-full h-72 ${book.color}`}></div>
                ))}
            </div>
        </section>
    );
};

export default Recommendations;