import React from 'react';
import QuestionButton from "./QuestionButton";
import QuestionImg from "../img/questions.svg"

export default class AboutUsMain extends React.Component {
    render() {
        document.title = "Частые вопросы"
        return (<main>
            <section className="faq-section">
                <img src={QuestionImg} alt="Рисунок" className="faq-pic"/>
                    <h1 className="faq-h1">Частые вопросы</h1>
                    <p className="faq-text">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
            </section>
            <section className="questions">
                <dl className="faq-list">
                        <QuestionButton queText="Могу ли я отменить бронь?" ariaControls="faq1_desc" answerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <QuestionButton queText="Могу ли я вернуть деньги, если не подошёл автомобиль?" ariaControls="faq2_desc" answerText="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    <QuestionButton queText="Что делать, если случилось ДТП?" ariaControls="faq3_desc" answerText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                    <QuestionButton queText="Могу ли я оставить автомобиль в удобном для меня месте?" ariaControls="faq4_desc" answerText="Данный вопрос обсуждается с собственником, но как правило
                            автомобиль
                            нужно вернуть туда, где вы его получили."/>
                    <QuestionButton queText="Что делать, если собственник просит заплатить ему напрямую?" ariaControls="faq5_desc" answerText="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                    <QuestionButton queText="Должен ли я заправлять автомобиль?" ariaControls="faq6_desc" answerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                </dl>
            </section>
        </main>);
    }
}
