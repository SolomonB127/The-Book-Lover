import React from 'react'
import Logo from '/src/assets/TBL_Logo.png'
const Navbar = () => {
    return (
        <header className='bg-white sticky top-0 z-10'>
            <section className='max-w-7xl mx-auto p-4 flex justify-between items-center'>
                <a href="">
                    <img src={Logo} alt="" width={150}/>
                </a>
                <nav aria-label='main' className='sm:block space-x-8 text-l font-semibold ml-20'>
                    <a href="#">Bookstore</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Login</a>
                    <a href="#">Search</a>
                </nav>
            </section>
        </header>
    )
}

export default Navbar