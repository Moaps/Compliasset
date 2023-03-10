/*

  Clariana Nogueira da Silva Costa
  https://github.com/Moaps/
  https://www.linkedin.com/in/clariananogueira/

  Criar uma tela de cadastro com Nome, Email e Senha. Focar em criar uma tela bonita que
  apresente bem suas habilidades de HTML, CSS e JavaScript.

*/

document.addEventListener("DOMContentLoaded", () => {
  /* Atribuo a constante formLogin ao método querySelector, que retornará o primeiro ítem linkado à id #login*/
  const formLogin = document.querySelector("#login");

  /* Atribuo a constante formLogin ao método querySelector, que retornará o primeiro ítem linkado à id #cadastro*/
  const formCriarConta = document.querySelector("#cadastro");

  /* Utilizarei do evento click, ligado ao ID #linkCriarConta para trocar de tela. Ele adicionará a classe form-escondido ao item, fazendo com que o formulário "desapareça" (display: none) */
  document.querySelector("#linkCriarConta").addEventListener("click", (e) => {
    e.preventDefault();
    formLogin.classList.add("form-escondido");
    formCriarConta.classList.remove("form-escondido");

    /* Troco o nome da página */
    document.title = "Cadastrar";
  });

  /* Utilizarei do evento click, ligado ao ID #linkEntrar para trocar de tela. Ele adicionará a classe form-escondido ao item, fazendo com que o formulário "desapareça" (display: none) */
  document.querySelector("#linkEntrar").addEventListener("click", (e) => {
    e.preventDefault();
    formLogin.classList.remove("form-escondido");
    formCriarConta.classList.add("form-escondido");

    /* Troco o nome da página */
    document.title = "Login";
  });
});
