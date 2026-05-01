import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import LoadFromTop from './Components/shared/LoadFromTop'
import { Toaster } from 'react-hot-toast'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Toaster position="top-right" reverseOrder={false} />
                <LoadFromTop />
                
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Services' element={<Services />} />
                    <Route path='/Portfolio' element={<Portfolio />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}