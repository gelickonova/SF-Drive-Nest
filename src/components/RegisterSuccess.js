import React from 'react';
import successImage from '../img/success.svg'
import "../../scss/registerthree.scss"
import {Link} from "react-router-dom";

export default class RegisterSuccess extends React.Component {
    render() {
        document.title = "Успешно!"
        return (<React.Fragment>
                <main>
                    <img src={successImage} alt="рисунок успеха"/>
                    <h1>Успех!</h1>
                    <p>Вы успешно зарегистрировались. Дождитесь проверки
                        документов и начните пользоваться сервисом.</p>
                    <Link to="/" className="continueBtn activeBtn">Перейти на главную</Link>
                </main>
            </React.Fragment>
        )
    }
}