import { Navbar } from "./features/landing/components/Navbar"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Products } from "./pages/Products"

function App() {

  return (
    <>
      <header>
        <div className="text-center p-4">
          <h1 className="text-4xl font-thin">Amodora</h1>
          <h2>Para regalar, compartir o conquistarte</h2>
        </div>
        <Navbar />
      </header>
      <main>
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