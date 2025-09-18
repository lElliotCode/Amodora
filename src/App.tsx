import { Navbar } from "./features/landing/components/Navbar"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Products } from "./pages/Products"

function App() {

  return (
    <>
      <header className="fixed z-20 bg-gradient-to-b from-amber-950 to-transparent">
        <div className="text-center p-4 text-white">
          <h1 className="text-4xl font-thin">Amodora</h1>
          <h2>Para regalar, compartir o conquistarte</h2>
        </div>
        <Navbar />
      </header>
      <main className=" relative w-screen h-[100vh] bg-[url('https://res.cloudinary.com/dkrzsj6te/image/upload/v1758155301/bg_okdjqi.avif')] bg-cover bg-center flex flex-col items-start justify-center pl-4">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </main>
    </>
  )
}

export default App

// < header className = "flex flex-col md:flex-row justify-between px-4 items-center lg:justify-around" >
//       <div className="text-center p-4">
//         <h1 className="text-4xl font-thin">Amodora</h1>
//         <h2>Para regalar, compartir o conquistarte</h2>
//       </div>
//       <Navbar />
//     </ >
// <Hero />