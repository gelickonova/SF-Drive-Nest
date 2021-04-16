import React from 'react';

import CloseIcon from "../img/login-close-icon.svg";
import LoginPic from "../img/login-pic.svg";
import Rectangle from "../img/login-rect.svg";
import {Link} from "react-router-dom";

export default class LogInWindow extends React.Component {
    render(){
        return(
            <div className="backgroundShadow">
                <div className="login">
                    <img src={CloseIcon} className="closeIcon" onClick={()=>{this.props.toggle()}}/>
                        <img src={LoginPic} className="loginPic"/>
                            <h1>Авторизация</h1>
                            <label>
                                <input placeholder="Электронная почта" className="loginInput"/>
                            </label>
                            <label>
                                <input placeholder="Пароль" className="loginInput"/>
                            </label>
                            <button className="loginBtn">Войти</button>
                            <img src={Rectangle} className="loginRect"/>
                                <Link to="/registration/step1" className="registration" onClick={()=>{this.props.toggle()}}>Зарегистрироваться</Link>
                </div>
            </div>
        )
    }
}