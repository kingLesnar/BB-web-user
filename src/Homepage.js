import Navbar from"./Components/HomePage/Navbar"
import Mainpage from"./Components/HomePage/Mainpage"
import Header from"./Components/HomePage/Header"
import apple_touch_icon_57x57_precomposed from "./img/apple-touch-icon-57x57-precomposed.png"
import favicon from "./img/favicon.ico"
import apple_touch_icon_72x72_precomposed from "./img/apple-touch-icon-72x72-precomposed.png"
import apple_touch_icon_114x114_precomposed from "./img/apple-touch-icon-114x114-precomposed.png"
import "./css/style.css"
import "./css/home_1.css"



const Homepage = () => {
    return (
        <div id="page">
           <Header className="version_1" />
           <Navbar />
           <Mainpage />
        </div> 
    )
}

export default Homepage
