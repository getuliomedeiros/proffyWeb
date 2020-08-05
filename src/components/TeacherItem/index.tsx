import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/43413275?s=460&u=731f62adfaf07a35b1d2e490d1e2341ce707f8fd&v=4" alt="Projeto React" />
        <div>
          <strong>Getúlio Medeiros</strong>
          <span>Programação Web</span>
        </div>
      </header>

      <p>
        React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.
        <br /><br />
        Views declarativas fazem com que seu código seja mais previsível e simples de depurar.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;