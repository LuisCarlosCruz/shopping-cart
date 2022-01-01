import React from 'react';
import facebookIcon from '../../img/icons/facebookIcon.png';
import googleIcon from '../../img/icons/googleIcon.png';
import gitHubIcon from '../../img/icons/gitHubIcon.png';

const FormsLogin = () => {
  return (
    <div>
      <form id="form-login">
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="senha">
          Senha:
          <input type="password" name="senha" id="senha" />
        </label>
      </form>
      <a href="https://google.com">Criar Conta</a>
      <button type="submit" form="form-login">
        Fazer Login
      </button>
      <img src={googleIcon} alt="icon-google" className="icon-rede" />
      <img src={gitHubIcon} alt="icon-gitHub" className="icon-rede" />
      <img src={facebookIcon} alt="icon-facebook" className="icon-rede" />
    </div>
  );
};

export default FormsLogin;
