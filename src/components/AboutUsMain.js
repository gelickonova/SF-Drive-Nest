import React from 'react';
import TeamPic from "../img/undraw_team_spirit_hrr4.svg";
import Rectangle from "../img/rect.svg";

import Ivanov from "../img/ivanov.png";
import Smirnov from "../img/smirnov.png";
import Yartsev from "../img/yartsev.png";
import Morozov from "../img/morozov.png";
import Deeva from "../img/deeva.png";
import Strelkova from "../img/strelkova.png"
import Person from "./Person";

export default class AboutUsMain extends React.Component {
    render() {
        document.title = "О нас";
        return (<main>
            <section className="about-section">
                <img src={TeamPic} alt="Рисунок команды" className="team_pic"/>
                    <h1 className="about-h1">О нас</h1>
                    <p className="about-text">Это учебный проект, созданный с целью получения боевого опыта в разработке
                        настоящего
                        живого
                        веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать
                        автомобили, но
                        и сдавать их в аренду.
                    </p>
            </section>
            <section className="contacts-section">
                <h2 className="contacts-h2">Контакты</h2>
                <div className="contacts">
                    <div className="mail-and-tel">
                        <p className="label">Электронная почта</p>
                        <a href="mailto:drive@skillfactory.com" className="link">drive@skillfactory.com</a>
                    </div>
                    <img src={Rectangle} className="rectangle"/>
                        <div className="mail-and-tel">
                            <p className="label">Телефон</p>
                            <a href="tel:+79121234567" className="link">+7 912 123-45-67</a>
                        </div>
                </div>
            </section>
            <section className="team-section">
                <h2 className="team-h2">Команда</h2>
                <div className="team-men">
                    <Person fullName="Иван Иванов" alt="фотография Ивана Иванова" avatar={Ivanov} position="СЕО"/>
                    <Person fullName="Алексей Смирнов" alt="фотография Алексея Смирнова" avatar={Smirnov} position="Frontend-разработчик"/>
                    <Person fullName="Денис Ярцев" alt="фотография Дениса Ярцева" avatar={Yartsev} position="Backend-разработчик"/>
                    <Person fullName="Николай Морозов" alt="фотография Николая Морозова" avatar={Morozov} position="Дизайнер"/>
                </div>
                <div className="team-women">
                    <Person fullName="Ирина Деева" alt="фотография Ирины Деевой" avatar={Deeva} position="Копирайтер"/>
                    <Person fullName="Мария Стрелкова" alt="фотография Марии Стрелковой" avatar={Strelkova} position="SMM"/>
                </div>
            </section>
        </main>);
    }
}
