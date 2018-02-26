import React, { Component } from 'react';
import LeituraAtual from './leituraAtual';
import LivrosLidos from './livrosLidos';
import DesejaLer from './desejaLer';

class Dashboard extends Component {
    render() {
        return (
          <div>
            <LeituraAtual livros={this.props.livros} />
            <LivrosLidos livros={this.props.livros} />
            <DesejaLer livros={this.props.livros} />
          </div>
        )
    }
}

export default Dashboard;