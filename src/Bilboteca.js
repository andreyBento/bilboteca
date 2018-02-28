import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LivroDetalhe from './livroDetalhe';
import Dashboard from './dashboard';
import Busca from './busca';

class Bilboteca extends Component {

  constructor(props) {
    super(props);
    this.changeLivroState = this.changeLivroState.bind(this);
  }

  state = {
    livros: [
      { 
        'title': 'Senhor dos Anéis: As duas torres',
        'nome': 'senhor-dos-aneis-as-duas-torres',
        'imgUrl': 'img/senhor-dos-aneis-as-duas-torres.jpg',
        'desc': 'As Duas Torres é a Segunda parte da grande obra de ficção fantástica de J. R. R. Tolkien, O Senhor dos Anéis. É impossível transmitir ao novo leitor todas as qualidades e o alcance do livro. Alternadamente cômica, singela, épica, monstruosa e diabólica, a narrativa desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário absolutamente convincente em seus detalhes. Nas palavras do romancista Richard Hughes, quanto à amplitude imaginativa, a obra praticamente não tem paralelos e é quase igualmente notável na sua vividez e na habilidade narrativa, que mantêm o leitor preso página após página.',
        'estado': 'lendo'
      },
      { 
        'title': 'Hobbit',
        'nome': 'hobbit',
        'imgUrl': 'img/hobbit.png',
        'desc': 'Bilbo Bolseiro é um hobbit que leva uma vida confortável e sem ambições. Mas seu contentamento é perturbado quando Gandalf, o mago, e uma companhia de anões batem à sua porta e levam-no para uma expedição. Eles têm um plano para roubar o tesouro guardado por Smaug, o Magnífico, um grande e perigoso dragão. Bilbo reluta muito em participar da aventura, mas acaba surpreendendo até a si mesmo com sua esperteza e sua habilidade como ladrão!',
        'estado': 'lendo'
      },
      { 
        'title': 'Senhor dos Anéis: A Sociedade do Anel',
        'nome': 'senhor-dos-aneis-sociedade-dos-aneis',
        'imgUrl': 'img/senhor-dos-aneis-sociedade-dos-aneis.jpg',
        'desc': 'Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro.',
        'estado': 'lido'
      },
      { 
        'title': 'Senhor dos Anéis: O Retorno do Rei',
        'nome': 'O-Senhor-dos-Aneis-o-Retorno-do-Rei-Volume-3',
        'imgUrl': 'img/O-Senhor-dos-Aneis-o-Retorno-do-Rei-Volume-3-J-R-R-Tolkien-52453.jpg',
        'desc': 'O Retorno do Rei é a terceira parte da grande obra de ficção fantástica de J. R. R. Tolkien, O Senhor dos Anéis. É impossível transmitir ao novo leitor todas as qualidades e o alcance do livro. Alterdamente cômica, singela, épica, monstruosa e diabólica, a narrativa desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário absolutamente em seus detalhes. Tolkien criou em O Senhor dos Anéis uma nova mitologia, num mundo inventado que demonstrou possuir um poder de atração atemporal.',
        'estado': 'desejado'
      },
      { 
        'title': 'Harry Potter e a Pedra Filosofal',
        'nome': 'harry-potter-pedra-filosofal',
        'imgUrl': 'img/harry-potter-pedra-filosofal.jpg',
        'desc': 'Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais. O menino de olhos verde, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer; ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo.',
        'estado': 'none'
      },
      { 
        'title': 'Harry Potter e a Câmara Secreta',
        'nome': 'harry-potter-camara-secreta',
        'imgUrl': 'img/harry-potter-camara-secreta.jpg',
        'desc': 'Depois de férias aborrecidas na casa dos tios trouxas, está na hora de Harry Potter voltar a estudar. Coisas acontecem, no entanto, para dificultar o regresso de Harry. Persistente e astuto, o herói não se deixa intimidar pelos obstáculos e, com a ajuda dos fiéis amigos Weasley, começa o ano letivo na Escola de Magia e Bruxaria de Hogwarts. As novidades não são poucas. Novos colegas, novos professores, muitas e boas descobertas e um grande e perigosos desafio. Alguém ou alguma coisa ameaça a segurança e a tranquilidade dos membros de Hogwarts.',
        'estado': 'none'
      },
      { 
        'title': 'Harry Potter e o Prisioneiro de Azkaban',
        'nome': 'harry-potter-prisioneiro-de-azkaban',
        'imgUrl': 'img/harry-potter-prisioneiro-de-azkaban.jpg',
        'desc': 'As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos Alfeneiros foi triste e solitária. Com muita ação, humor e magia, Harry Potter e o prisioneiro de Azkaban traz de volta o gigante atrapalhado Rúbeo Hagrid, o sábio diretor Alvo Dumbledore, a exigente professora de transformação Minerva MacGonagall e o novo mestre Lupin, que guarda grandes surpresas para Harry.',
        'estado': 'none'
      },
      { 
        'title': 'Harry Potter e o Calice de Fogo',
        'nome': 'harry-potter-calice-de-fogo',
        'imgUrl': 'img/harry-potter-calice-de-fogo.jpg',
        'desc': 'Nesta aventura, o feiticeiro cresceu e está com 14 anos. O início do ano letivo de Harry Potter reserva muitas emoções, mágicas, e acontecimentos inesperados, além de um novo torneio em que os alunos de Hogwarts terão de demonstrar todas as habilidades mágicas e não-mágicas que vêm adquirindo ao longo de suas vidas. Harry é escolhido pelo Cálice de Fogo para competir como um dos campeões de Hogwarts, tendo ao lado seus fiéis amigos. Muitos desafios, feitiços, poções e confusões estão reservados para Harry. Além disso, ele terá que lidar ainda com os problemas comuns da adolescência - amor, amizade, aceitação e rejeição.',
        'estado': 'none'
      },
      { 
        'title': 'Harry Potter e a Ordem da Fênix',
        'nome': 'harry-potter-ordem-da-fenix',
        'imgUrl': 'img/harry-potter-ordem-da-fenix.jpg',
        'desc': 'Harry não é mais um garoto. Aos 15 anos, continua sofrendo a rejeição dos Dursdley, sua estranha família no mundo dos trouxas. Também continua contando com Rony Weasley e Hermione Granger, seus melhores amigos em Hogwarts, para levar adiante suas investigações e aventuras. Mas o bruxinho começa a sentir e descobrir coisas novas, como o primeiro amor e a sexualidade. Nos volumes anteriores, J. K. Rowling mostrou como Harry foi transformado em celebridade no mundo da magia por ter derrotado, ainda bebê, Voldemort, o todo-poderoso bruxo das trevas que assassinou seus pais. Neste quinto livro da saga, o protagonista, numa crise típica da adolescência, tem ataques de mau humor com a perseguição da imprensa, que o segue por todos os lugares e chega a inventar declarações que nunca deu. Harry vai enfrentar as investidas de Voldemort sem a proteção de Dumbledore, já que o diretor de Hogwarts é afastado da escola. E vai ser sem a ajuda de seu protetor que o jovem herói enfrentará descobertas sobre a personalidade controversa de seu pai, Tiago Potter, e a morte de alguém muito próximo.',
        'estado': 'none'
      },
      { 
        'title': 'Harry Potter e o Enigma do Principe',
        'nome': 'harry-potter-enigma-do-principe',
        'imgUrl': 'img/harry-potter-enigma-do-principe.jpg',
        'desc': 'Harry Potter e o enigma do príncipe dá continuidade à saga do jovem bruxo Harry Potter a partir do ponto em que o livro anterior parou - o momento em que fica provado que o poder de Voldemort e dos Comensais da Morte, seus seguidores, cresce mais a cada dia, em meio à batalha entre o bem e o mal. A onda de terror provocada pelo Lorde das Trevas estaria afetando, até mesmo, o mundo dos trouxas (não-bruxos), e sendo agravada pela ação dos dementadores, criaturas mágicas aterrorizantes que sugam a esperança e a felicidade das pessoas. Harry, que acabou de completar 16 anos, parte rumo ao sexto ano na Escola de Magia e Bruxaria de Hogwarts, animado e ao mesmo tempo apreensivo com a perspectiva de ter aulas particulares com o professor Dumbledore, o diretor da escola e o bruxo mais respeitado em toda comunidade mágica. Harry, longe de ser aquele menino magricela que vivia no quarto debaixo da escada na casa dos tios trouxas, é um dos principais nomes entre aqueles que lutam contra Voldemort, e se vê cada vez mais isolado à medida que os rumores de que ele é O Eleito - o único capaz de derrotar o Lorde das Trevas, se espalham pelo mundo dos bruxos. Dois atentados contra a vida de estudantes, a certeza de Harry quanto ao envolvimento de Draco Malfoy com os Comensais da Morte e o comportamento de Snape, suspeito como sempre, adicionam ainda mais tensão ao já inquietante período. Apesar de tudo isso, Harry e os amigos são adolescentes típicos - dividem tarefas escolares e dormitórios bagunçados, correm das aulas para os treinos de quadribol, e namoram.',
        'estado': 'none'
      },
      { 
        'title': 'Harry Potter e as Reliquias da morte',
        'nome': 'harry-potter-reliquias-da-morte',
        'imgUrl': 'img/harry-potter-reliquias-da-morte.jpg',
        'desc': 'Harry Potter e as relíquias da morte, de J.K. Rowling, é o sétimo e último livro da série. Voldemorte está cada vez mais forte e Harry Potter precisa encontrar e aniquilar as Horcruxes para enfraquecer o lorde e poder enfrentá-lo. Nessa busca desenfreada, contando apenas com os amigos Rony e Hermione, Harry descobre as Relíquias da Morte, que serão úteis na batalha do bem contra o mal.',
        'estado': 'none'
      }
    ]
  };

  changeLivroState = function(value, nome){
    this.setState(state => {
      state.livros.map((livro) => {
        if(livro.nome === nome){
          return livro.estado = value;
        } else {
          return false;
        }
      });
    })
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

        <Route path="/interna" render={() => (
          <LivroDetalhe 
          livro={this.state.livros}
          onLivroDetalhe={this.changeLivroState}
          />
        )} />

        <Route path="/busca" render={() => (
          <Busca livros={this.state.livros} />
        )} />

      </div>
    );
  }
}

export default Bilboteca;
