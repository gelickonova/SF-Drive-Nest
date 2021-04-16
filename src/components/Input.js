import React from 'react';

export default class Input extends React.Component {

    render() {
        document.title = "Шаг 2 из 3"
        return (<label id={this.props.id} className={this.props.labelClassName}>
            <input required type={this.props.inputType} minLength="8"
                   maxLength="24" placeholder={this.props.inputPlaceholder} name={this.props.inputName}
                   value={this.state.repeatPassword} onInput={this.handleInputChange.bind(this)}/>
            <p className="invalidContentError hidden">Неверная почта</p>
        </label>)
    }
}