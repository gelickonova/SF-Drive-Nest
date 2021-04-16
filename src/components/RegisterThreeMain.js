import React from 'react';
import downloadImage from '../img/documents.svg'
import "../../scss/registerthree.scss"
import axios from "axios";

export default class RegisterThreeMain extends React.Component {
    render() {
        document.title = "Шаг 3 из 3"
        return (<main  className="step-three-main">
            <div>
                <p className="step">Шаг 3 из 3</p>
                <h1>Загрузите документы</h1>
                <p className="description">Разворот паспорта и страницу с пропиской, а также водительское удостоверение
                    с двух сторон</p>
            </div>
            <form encType="multipart/form-data" method="post" className="form">
                <label htmlFor="upload-photo" className="label-upload-photo documents-form">
                    <img src={downloadImage} alt="форма для отправки фото"/>
                    <input type="file" className="photo-input"
                           id="upload-photo" accept="image/png, image/jpeg" multiple/>
                </label>
                <div className="footerBtn">
                    <input type="submit" value="Зарегистрироваться" className="continueBtn activeBtn"  onClick={(e) => {
                        e.preventDefault()
                        axios.post("/registration/step3", this.state).then(res => res.data).then(data => {
                            if(data) this.props.history.push('/registration/done')
                        })
                    }}/>
                </div>
            </form>
        </main>)
    }
}