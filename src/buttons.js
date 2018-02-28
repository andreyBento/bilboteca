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
                <button className="btn" data-change="lido" onClick={this.onBtnClick}>Já li este livro</button>
                <button className="btn" data-change="desejado" onClick={this.onBtnClick}>Desejo ler este livro</button>
                <button className="btn" data-change="lendo" onClick={this.onBtnClick}>Estou lendo este livro</button>
                <button className="btn" data-change="none" onClick={this.onBtnClick}>Remover este livro da minha biblioteca pessoal</button>
            </div>
        )
    };
}

export default Buttons;