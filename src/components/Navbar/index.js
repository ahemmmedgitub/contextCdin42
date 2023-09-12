// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Namvbr = () =>(
    <ThemeContext.Consumer>
        {value=>{
            const {isDarkTheme, toggleTheme} = value

            const sendResultedValue = () =>{
                    toggleTheme(!isDarkTheme)
            }
        const backgroundColor = isDarkTheme ? 'blackBg' : ''
        const textColor = isDarkTheme ? 'text-color' : ''
        const webImg = isDarkTheme ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        const themeImg = isDarkTheme ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

        return(  
    <nav className={`nav-container ${backgroundColor}`}>
        <img src={webImg} alt="website logo" className="web-logo" />
            <ul className="home-about-container">
                <Link to='/' className="link-item">
                    <li className={`list-items ${textColor}`}>Home</li>
                </Link>
                <Link to='/about' className="link-item">
                    <li className={`list-items ${textColor}`}>About</li>
                </Link>
            </ul>
        <button data-testid="theme" onClick={sendResultedValue} className="btn-img">
            <img src={themeImg} alt="theme" className="theme-logo" />
        </button>
   </nav>
   )
    }}
    </ThemeContext.Consumer>
)

export default Namvbr