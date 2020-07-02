/**
 * AXIOS
 * 
 * Axios pode ser considerado como um encapsulamento do XMLHttpRequest.
 * Por de baixo dos panos, o axios executa o XMLHttpRequest, mas nos ajuda a retornar os valores
 * mais facilmente e de uma forma menos verbosa, além de que a resposa já vem convertida em JSON.
 */

axios.get('https://api.github.com/users/igorfjales')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    })