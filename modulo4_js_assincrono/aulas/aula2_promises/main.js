/**
 * PROMISES
 * 
 * É um objeto usado para processamento assíncrono. Uma Promise representa um valor 
 * que pode estar disponível agora, no futuro ou nunca.
 * 
 * Podem devolver o valor de retorno só depois de um tempo, não seguindo o fluxo tradicional do código.
 * 
 * resolve -> Função que é passada como parâmentro dentro da promise que é usada para medir quando há sucesso
 * na requisição.
 * 
 * reject -> Função que é passada como parâmentro dentro da promise que é usada para medir quando há fracasso
 * na requisição.
 * 
 *   .then()  -> É executado quando o 'resolve' for acionado na promise.
 *   .catch() -> É executado quando o 'reject' for acionado na promise.
 * 
 */

var minhaPromise = function () {
    return new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/igorfjales');

        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição.');
                }
            }
        }
    });
}

minhaPromise()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });

