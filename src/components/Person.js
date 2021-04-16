import React from 'react';

export default class Person extends React.Component {
    render(){
        return(
            <div className="person">
                <img src={this.props.avatar} alt={this.props.alt} className="personal-pic"/>
                <p className="name">{this.props.fullName}</p>
                <p className="position">{this.props.position}</p>
            </div>
        )
    }
}