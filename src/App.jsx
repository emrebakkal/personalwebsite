import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Typer from './components/Typer'
import Cards from './components/Cards'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='font-outfit'>
      <section id="header">
        <Header />
      </section>
      <section id="about" className='mb-10'>
        <About />
      </section>
      <section id="typer" className='mt-[7%] mb-10'>
        <Typer />
      </section>
      <h1 className='mt-[7%] mb-10 text-center text-secondary lg:text-3xl text-[18px] font-bold'>
        Collaborate with brands and agencies to
        <br />
        create impactful results.
      </h1>
      <section id="cards" className=' mb-10 justify-center flex'>
        <Cards />
      </section>
      <hr width="70%" className='mx-auto mb-10' />
      <section id="contact" className='mt-[7%] mb-10'>
        <Contact />
      </section>
      <section id="footer" className='mt-[7%] mb-10'>
        <Footer />
      </section>
    </div >
  )
}
