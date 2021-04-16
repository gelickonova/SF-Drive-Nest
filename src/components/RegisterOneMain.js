import React from 'react';
import axios from "axios";

export default class RegisterOneMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                fullName: '',
                birthDate: '',
                email: '',
                phoneNumber: '',
                passportID: '',
                dateOfIssue: '',
                issuingAuthority: '',
                departmentCode: '',
                numberOfLicense: '',
                dateOfLicense: '',
                password: '',
                repeatPassword: ''
            },
            invalidPassword: false,
            invalidEmail: false,
            invalidForm: true,
            visibleFirstPassword: false,
            visibleSecondPassword: false,
            disabledSubmit: false,
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    }

    render() {
        document.title = "Регистрация"
        return (
            <main>
                {/*<form method="post" className="form">*/}
                <form className="form">
                    <div>
                        <p className="step">Шаг 1 из 3</p>
                        <h1>Расскажите о себе</h1>
                    </div>
                    <section className="sectionMain FourInputs">
                        <h2>Информация о вас</h2>
                        <p id="p1">ФИО</p>
                        <label id="input1" className="longInput">
                            <input required placeholder="ФИО полностью" name="fullName" value={this.state.user.fullName}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>
                        <p id="p2">Дата рождения</p>
                        <label id="input2" className="shortInput">
                            <input required type="date" name="birthDate" value={this.state.user.birthDate}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>
                        <p id="p3">Электронная почта</p>
                        <label id="input3" className="longInput">
                            <input required type="email" className={this.state.invalidEmail ? "invalidContent" : ""}
                                   placeholder="mail@example.com"
                                   name="email" value={this.state.user.email}
                                   onInput={this.handleInputChange.bind(this)}/>
                            {this.state.invalidEmail && <p className="invalidContentError">Неверная почта</p>}
                        </label>
                        <p id="p4">Телефон</p>
                        <label id="input4" className="shortInput">
                            <input required type="tel" placeholder="+7 900 000-00-00" name="phoneNumber"
                                   value={this.state.user.phoneNumber}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>

                    </section>
                    <section className="sectionMain FourInputs">
                        <h2>Паспорт</h2>
                        <p id="p5">Серия и номер</p>
                        <label id="input5" className="shortInput">
                            <input required type="number" placeholder="0000 000000" name="passportID"
                                   value={this.state.user.passportID}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>
                        <p id="p6">Дата выдачи</p>
                        <label id="input6" className="shortInput">
                            <input required type="date" name="dateOfIssue" value={this.state.user.dateOfIssue}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>
                        <p id="p7">Кем выдан</p>
                        <label id="input7" className="longInput">
                            <input required placeholder="Название органа выдавшего паспорт" name="issuingAuthority"
                                   value={this.state.user.issuingAuthority}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>
                        <p id="p8">Код подразделения</p>
                        <label id="input8" className="shortInput">
                            <input required type="number" placeholder="000-000" name="departmentCode"
                                   value={this.state.user.departmentCode}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>
                    </section>
                    <section className="sectionMain TwoInputs">
                        <h2>Водительское удостоверение</h2>
                        <p id="p9">Серия и номер</p>
                        <label id="input9" className="shortInput">
                            <input required type="number" placeholder="0000 000000" name="numberOfLicense"
                                   value={this.state.user.numberOfLicense}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>
                        <p id="p10">Дата выдачи</p>
                        <label id="input10" className="shortInput">
                            <input required type="date" placeholder="00.00.0000" name="dateOfLicense"
                                   value={this.state.user.dateOfLicense} onInput={this.handleInputChange.bind(this)}/>
                        </label>
                    </section>
                    <section className="sectionMain TwoInputs">
                        <h2>Пароль</h2>
                        <p id="p11">Придумайте пароль</p>
                        <label id="input11" className="longInput">
                            <input required type={(this.state.visibleFirstPassword) ? "text" : "password"} minLength="8"
                                   maxLength="24" placeholder="•••••••••••••••••••" name="password"
                                   className={this.state.invalidPassword ? "invalidContent" : ""}
                                   value={this.state.user.password} onInput={this.handleInputChange.bind(this)}/>
                            <button className="passwordToggle" onClick={(e) => {
                                e.preventDefault();
                                console.log('toggle1')
                                this.setState({
                                    ...this.state,
                                    visibleFirstPassword: !this.state.visibleFirstPassword,
                                })
                                console.log(this.state.visibleFirstPassword, 'first')
                            }}/>
                        </label>
                        <p id="p12">Повторите пароль</p>
                        <label id="input12" className="longInput">
                            <input required type={(this.state.visibleSecondPassword) ? "text" : "password"}
                                   minLength="8"
                                   maxLength="24" placeholder="•••••••••••••••••••" name="repeatPassword"
                                   className={this.state.invalidPassword ? "invalidContent" : ""}
                                   value={this.state.user.repeatPassword} onInput={this.handleInputChange.bind(this)}/>
                            <button className="passwordToggle" onClick={(e) => {
                                e.preventDefault();
                                console.log('toggle2')
                                this.setState({
                                    ...this.state,
                                    visibleSecondPassword: !this.state.visibleSecondPassword,
                                })
                                console.log(this.state.visibleSecondPassword, 'second')
                            }}/>
                            {this.state.invalidPassword && <p className="invalidContentError">Пароли не совпадают</p>}
                        </label>
                    </section>
                    <div className="someClass">
                        <label htmlFor="submit-button">
                            <input type="submit" value="Продолжить" id="submit-button"
                                   className={this.state.disabledSubmit ? "continueBtn inactiveBtn" : "continueBtn activeBtn"}
                                   onClick={(e) => {
                                       e.preventDefault()
                                       console.log('is disabled', this.state.disabledSubmit)
                                       if (!this.state.disabledSubmit) {
                                           axios.post("/registration/step1", this.state.user)
                                               .then(res => {
                                                   console.log(res)
                                                   if (res.status === 200) {
                                                       this.setState({
                                                           ...this.state,
                                                           invalidPassword: false,
                                                           invalidEmail: false
                                                       })
                                                       console.log('to step 2!')
                                                       this.props.history.push('/registration/step2')
                                                   }
                                               }).catch(err => {
                                               console.log("FOOBAR",err.response.data)

                                           if (err.response.data.password) {
                                               this.setState({
                                                   ...this.state,
                                                   invalidPassword: true
                                               })
                                           }
                                           if (err.response.data.email) {
                                               this.setState({
                                                   ...this.state,
                                                   invalidEmail: true
                                               })
                                           }
                                               })

                                   }
                                   }}/>
                    </label>
                </div>
            </form>
    </main>
    )
    }
}