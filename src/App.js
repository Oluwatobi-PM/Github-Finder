import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import Home from './Pages/Home';



function App() {
  return (
    <Router>
     <div className='flex flex-col justify-between h-screen'>
       <Navbar />
       <main className='container mx-auto px-3 pb-12'>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/notfound' element={<NotFound />} />
           <Route path='/*' element={<NotFound />} />
         </Routes>
        </main>
       <Footer />
     </div>
    </Router>
   
  );
}

export default App;
