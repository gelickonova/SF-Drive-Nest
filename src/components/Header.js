import React from 'react';
import Logo from "../img/logo.svg"
import {Link} from "react-router-dom";
import menuIcon from "../img/mobile-menu-icon.svg";
import LogInWindow from "./LogInWindow";
import '../../scss/login.scss'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (<React.Fragment>
            {this.state.isOpen && <LogInWindow toggle={this.toggle.bind(this)}/>}
            <header>
            <a href="#" className="header-logo"><img src={Logo}
                                                     alt="Логотип SkillDrive, ссылка на главную страницу"/></a>
            <section className="menu">
                <nav>
                    <ul className="nav">
                        <li><Link to="/aboutus">О нас</Link></li>
                        <li><a href="#">Условия</a></li>
                        <li><Link to="/faq">Частые вопросы</Link></li>
                    </ul>
                </nav>
                <button className="button" onClick={this.toggle.bind(this)}>Войти</button>
            </section>
            <button className="menu-icon">
                <img src={menuIcon} alt="меню"/>
            </button>
        </header></React.Fragment>);
    }
}
