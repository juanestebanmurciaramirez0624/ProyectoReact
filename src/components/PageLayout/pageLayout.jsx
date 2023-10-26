import Navbar from '../navbar/navbar'
import Header from '../header/header'
import { useDarkMode } from '../../context/darkModeContext'
import { useNavbar } from '../../context/navbar'
import './pageLayaut.css'

export default function PageLayout({ children }){
    const { isDarkMode } = useDarkMode();
    const { isNavbar } = useNavbar()

    return(
        <div className={isDarkMode ? 'dark' : ''}>
                <Navbar />
                <div className= {`content ${isNavbar ? 'active' : ''}`}>
                    <Header/>
                <main>
                    {children}
                </main>
        </div>
        </div>
)
}