import React, { Component } from 'react';
// import { update } from './BooksAPI';

class Resultado extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleOwnedBooks = this.handleOwnedBooks.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }

    handleChange(book, value){
        if(value !== null){
            this.props.addBook(book, value);
        }
    }

    handleImage(book){
        if(book.imageLinks !== undefined){
            return <img src={book.imageLinks.smallThumbnail} alt={book.title} />
        }
    }

    handleOwnedBooks(book){
        let shelf = undefined,
            notInShelf;
        this.props.ownedBooks.map(ownedBook => {
            if(ownedBook.id === book.id){
                if(ownedBook.shelf === 'wantToRead'){
                    return shelf = 'wantToRead';
                } else if(ownedBook.shelf === 'read'){
                    return shelf = 'read';
                } else if(ownedBook.shelf === 'currentlyReading'){
                    return shelf = 'currentlyReading';
                }
            } else {
                return notInShelf = true;
            }
        });

        if(shelf === 'wantToRead'){
            return (
                <div>
                    <p className="bookShelfAtual">Este livro pertence a sua estande de <b>livros desejados</b></p>
                    <select className="form-control" onChange={(event) => this.handleChange(book, event.target.value)}>
                        <option value="null">Selecione...</option>
                        <option value="read">Já li este livro</option>
                        <option value="currentlyReading">Estou lendo este livro</option>
                        <option value="none">Não quero mais ler este livro</option>
                    </select>
                </div>
            )
        } else if(shelf === 'read'){
            return (
                <div>
                    <p className="bookShelfAtual">Este livro pertence a sua estande de <b>livros lidos</b></p>
                    <select className="form-control" onChange={(event) => this.handleChange(book, event.target.value)}>
                        <option value="null">Selecione...</option>
                        <option value="wantToRead">Desejo ler este livro</option>
                        <option value="read">Estou lendo este livro</option>
                        <option value="none">Não quero mais ler este livro</option>
                    </select>
                </div>
            )
        } else if(shelf === 'currentlyReading'){
            return (
                <div>
                    <p className="bookShelfAtual">Este livro pertence a sua estande de <b>leitura atual</b></p>
                    <select className="form-control" onChange={(event) => this.handleChange(book, event.target.value)}>
                        <option value="null">Selecione...</option>
                        <option value="read">Já li este livro</option>
                        <option value="wantToRead">Desejo ler este livro</option>
                        <option value="none">Não quero mais ler este livro</option>
                    </select>
                </div>
            )
        } else if (shelf === undefined && notInShelf === true){
            return (
                <div>
                    <p className="bookShelfAtual">Este livro não pertence a nenhuma estande de livros sua</p>
                    <select className="form-control" onChange={(event) => this.handleChange(book, event.target.value)}>
                        <option value="null">Selecione...</option>
                        <option value="read">Já li este livro</option>
                        <option value="currentlyReading">Estou lendo este livro</option>
                        <option value="wantToRead">Desejo ler este livro</option>
                    </select>
                </div>
            )
        }
    }

    render() {
        let valorSemEspaco = this.props.inputValue.replace(/\s/g, '');
        if(valorSemEspaco.length > 0 && this.props.resultEmpty === false){
            return this.props.livros.map((book) => {
                return (
                    <div className="livro col-3" key={book.id}>
                        {this.handleImage(book)}
                        <p>{book.title} <br/> {book.subtitle}</p>
                        {this.handleOwnedBooks(book)}
                    </div>
                )
            });
        } else if(valorSemEspaco.length === 0 && this.props.resultEmpty === false){
            return <h2>Pesquise algum livro no imput acima ;)</h2>
        } else if(this.props.resultEmpty === true){
            return <h2>Deu ruim :(</h2>
        }
    };
}

export default Resultado;