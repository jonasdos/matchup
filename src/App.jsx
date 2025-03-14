import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Reservar from './components/Reservar.jsx'



const pageComponents = {
    home: <Home/>,
    reservar: <Reservar/>,
    login: <Login/>
}
const { pathname } = window.location;
let Pagina;
if(pathname === '/' || pathname === '/home') {
    Pagina = pageComponents.home
}
if(pathname === '/reservar') {
    Pagina = pageComponents.reservar
}
if(pathname === '/login') {
    Pagina = pageComponents.login
}

createRoot(document.getElementById('root')).render(
   
    <>
    <Header/>
    {Pagina}    
    <Footer/>
    </>
   
)
