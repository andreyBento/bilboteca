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

        if(this.props.livroAtual.shelf === 'currentlyReading'){
            return (
                <div className="btns">
                    <button className="btn btn--amarelo" data-change="read" onClick={this.onBtnClick}>Já li este livro</button>
                    <button className="btn btn--verde" data-change="wantToRead" onClick={this.onBtnClick}>Desejo ler este livro</button>
                    <button className="btn btn--vermelho" data-change="none" onClick={this.onBtnClick}>Remover este livro da minha biblioteca pessoal</button>
                </div>
            );
        }
        if(this.props.livroAtual.shelf === 'read'){
            return (
                <div className="btns">
                    <button className="btn btn--verde" data-change="wantToRead" onClick={this.onBtnClick}>Desejo ler este livro</button>
                    <button className="btn btn--azul" data-change="currentlyReading" onClick={this.onBtnClick}>Estou lendo este livro</button>
                    <button className="btn btn--vermelho" data-change="none" onClick={this.onBtnClick}>Remover este livro da minha biblioteca pessoal</button>
                </div>
            );
        }
        if(this.props.livroAtual.shelf === 'wantToRead'){
            return (
                <div className="btns">
                    <button className="btn btn--amarelo" data-change="read" onClick={this.onBtnClick}>Já li este livro</button>
                    <button className="btn btn--azul" data-change="currentlyReading" onClick={this.onBtnClick}>Estou lendo este livro</button>
                    <button className="btn btn--vermelho" data-change="none" onClick={this.onBtnClick}>Remover este livro da minha biblioteca pessoal</button>
                </div>
            );
        }
        if(this.props.livroAtual.shelf === 'none'){
            return (
                <div className="btns">
                    <button className="btn btn--amarelo" data-change="read" onClick={this.onBtnClick}>Já li este livro</button>
                    <button className="btn btn--verde" data-change="wantToRead" onClick={this.onBtnClick}>Desejo ler este livro</button>
                    <button className="btn btn--vermelho" data-change="currentlyReading" onClick={this.onBtnClick}>Estou lendo este livro</button>
                </div>
            );
        }
    };
}

export default Buttons;