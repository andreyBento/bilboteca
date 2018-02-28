import React, { Component } from 'react';

class Buttons extends Component {

    constructor(props) {
        super(props);
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick(event) {
        var value = event.target.getAttribute('data-change');
        this.props.onAction(value, this.props.livroAtual);
    }

    render() {
        return (
            <div className="btns">
                <button className="btn" data-change="lido" onClick={this.onBtnClick}>Livro lido</button>
                <button className="btn" data-change="desejado" onClick={this.onBtnClick}>Desejo ler</button>
                <button className="btn" data-change="lendo" onClick={this.onBtnClick}>Lendo</button>
                <button className="btn" data-change="none" onClick={this.onBtnClick}>Remover da biblioteca</button>
            </div>
        )
    };
}

export default Buttons;