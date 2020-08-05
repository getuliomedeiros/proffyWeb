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
        O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
            <br /><br />
            É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.
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