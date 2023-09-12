// Write your code here
import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'

import Namvbr from '../Navbar'

import './index.css'

class NotFound extends Component{
    render(){
        return(
            <ThemeContext.Consumer>
            {value=>{
                const {isDarkTheme} = value

                        const backgroundColor = isDarkTheme ? 'black-color' : ''
                          const textColor = isDarkTheme ? 'not-color' : ''

            return(
            <div className="bg-container">
                <Namvbr />
                <div className={`home-container ${backgroundColor}`}>
                    <img src='https://assets.ccbp.in/frontend/react-js/not-found-img.png' alt="not found" className="not-found-logo" />
                    <h1 className={`not-found-heading ${textColor}`}>Lost Your Way?</h1>
                    <p className="not-found-description">We cannot seem to find the page your are looking for.</p>
                </div>
            </div>
            )
            }}
            </ThemeContext.Consumer>
        )
    }
}
export default NotFound