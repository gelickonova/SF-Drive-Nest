import React from 'react';
import "../../scss/errorheader.scss"

export default class ErrorHeader extends React.Component {

    render() {
        document.title = "Регистрация"
        return (<header className="error-header">
                <p className="error-text">Не удалось продолжить регистрацию. Попробуйте ещё раз</p>
            </header>
        )
    }
}