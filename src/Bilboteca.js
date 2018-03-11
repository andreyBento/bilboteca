import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LivroDetalhe from './livroDetalhe';
import Dashboard from './dashboard';
import Busca from './busca';
import { getAll } from './BooksAPI';
import { get } from './BooksAPI';
import { update } from './BooksAPI';

class Bilboteca extends Component {

  constructor(props) {
    super(props);
    this.changeLivroState = this.changeLivroState.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  state = {
    livros: []
  };

  changeLivroState = function(value, id, history){

    get(id).then((result) => {
      var newResult = this.state.livros.map((item) => {
        if(item.id === result.id){
          item.shelf = value;
        }
        return item;
      });

      this.setState({ livros: newResult });

      history.push('/');
      return update(result, value);
    });

  }

  componentWillMount(){
    getAll().then((result) => {
      this.setState({ livros: result });
    });
  }

  addBook = function(book, value, history){
    update(book, value).then(() => 
      getAll().then((result) => {
        this.setState({ livros: result });
        history.push('/');
      })
    );
  }

  render() {
    return (
      <div className="bilboteca">
        <header className="bilboteca-header">
          <h1 className="main-title">Bilboteca</h1>
          <p>A biblioteca do Bilbo</p>
          <Link to="/busca" className="btn">Buscar livros</Link>
        </header>

        <Route exact path="/" render={() => (
          <Dashboard livros={this.state.livros} />
        )} />

        <Route path="/interna" render={({ history }) => (
          <LivroDetalhe 
          livro={this.state.livros}
          onLivroDetalhe={(value, id) => {
            this.changeLivroState(value, id, history);
          }}
          />
        )} />

        <Route path="/busca" render={({ history }) => (
          <Busca livros={this.state.livros} addBook={(book, value) => {
            this.addBook(book, value, history)
          }} />
        )} />

      </div>
    );
  }
}

export default Bilboteca;
