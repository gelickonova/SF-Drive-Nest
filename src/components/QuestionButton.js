import React from 'react';

export default class QuestionButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    render() {
        return (<React.Fragment>
                <dt>
                    <button aria-expanded={this.state.isOpen.toString()} aria-controls={this.props.ariaControls}
                            className="collapsible" onClick={() => {
                        this.setState ({isOpen: !this.state.isOpen});
                    }}>
                        {this.props.queText}
                    </button>
                </dt>
                <dd>
                    <p id={this.props.ariaControls}
                       className={(this.state.isOpen ? "" : "hidden ") + "desc"}>{this.props.answerText}</p>
                </dd>
            </React.Fragment>
        )
    }
}