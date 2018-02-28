import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Alert extends Component {

    render() {
        if (this.props.isDisplayed) {
            return(
                <div className="alert alert-success">
                    <span>Estado do livro alterado com sucesso!</span>
                    <Link to="/">Retornar para dashboard</Link>
                </div>
            )
        } else {
            return null;
        }
    };
}

export default Alert;