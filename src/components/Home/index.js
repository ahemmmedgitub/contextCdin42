// Write your code here
import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'

import Namvbr from '../Navbar'

import './index.css'

class Home extends Component{
    render(){
            return(
                <ThemeContext.Consumer>
                    {value=>{
                        const {isDarkTheme} = value 

                        const backgroundColor = isDarkTheme ? 'black-color' : ''
                        const homeImg = isDarkTheme ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png' : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
                        const textColor = isDarkTheme ? 'heading-color' : ''

                    return(
                    <div className="bg-container">
                        <Namvbr />
                        <div className={`home-container ${backgroundColor}`}>
                            <img src={homeImg} alt="home" className="home-logo" />
                            <h1 className={`home-heading ${textColor}`}>Home</h1>
                        </div>
                    </div>
                    )
                    }}
                </ThemeContext.Consumer>
            )
    }
}
export default Home