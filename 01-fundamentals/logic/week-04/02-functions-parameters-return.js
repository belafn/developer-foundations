/*
===========================================================================================
   FUNÇÕES — PARÂMETROS E RETURN
===========================================================================================

Funções podem receber dados através de parâmetros.
Elas também podem devolver um resultado usando a palavra-chave "return".

Compreender a diferença entre "console.log" e "return"
é essencial para escrever código reutilizável e profissional.
*/

//=========================================================================================
// 01- Parâmetros e Argumentos
//=========================================================================================

// Parâmetros são variáveis definidas na criação da função.
// Argumentos são os valores passados na chamada da função.

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Alice");
greetUser("Bob");

//=========================================================================================
// 02- Múltiplos Parâmetros
//=========================================================================================

// Uma função pode receber mais de um parâmetro
// A ordem dos argumentos passados na chamada deve corresponder à ordem definida na função.

function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(5, 10);

//=========================================================================================
// 03- Diferença entre console.log e return
//=========================================================================================

// console.log apenas exibe o valor.
// return devolve o valor para quem chamou a função.

function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 3);

console.log(result);

//=========================================================================================
// 04- Funções que retornam valores
//=========================================================================================

function calculateArea(width, height) {
    return width * height;
}

let area = calculateArea(5, 8);
console.log("Area:", area);

//=========================================================================================
// 05- Encerramento da função com return
//=========================================================================================

// Quando o return é executado, a função é encerrada imediatamente.

function checkAge(age) {
    if (age < 18) {
        return "Underage";
    }
    return "Adult";
}

console.log(checkAge(16));
console.log(checkAge(21));

//=========================================================================================
// 06- Funções sem return explícito
//=========================================================================================
// Se uma função não tiver return, ela retorna undefined.

function showMessage() {
    console.log("This function does not return a value.");
}

let response = showMessage();
console.log(response); // undefined

//=========================================================================================
// 07- Boas práticas
//=========================================================================================
// - Prefira retornar valores ao invés de apenas usar console.log
// - Funções devem ter uma única responsabilidade
// - Parâmetros devem ter nomes claros
// - Evite misturar lógica e exibição no mesmo lugar

//=========================================================================================
// CONSIDERAÇÕES FINAIS
//=========================================================================================
// - Parâmetros permitem flexibilidade
// - Argumentos são os valores enviados
// - return torna a função reutilizável
// - Funções sem return retornam undefined

