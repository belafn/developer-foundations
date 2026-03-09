/* ----------------------------------------------------------------------------------------
   01 - ERROR HANDLING (TRATAMENTO DE ERROS)
-----------------------------------------------------------------------------------------*/

/*
Em sistemas reais, erros acontecem o tempo todo.

Exemplos comuns:
- divisão por zero
- dados inválidos
- acesso a propriedades inexistentes
- falhas de lógica

Se não tratarmos esses erros corretamente, o programa pode quebrar.

JavaScript fornece mecanismos para:
- detectar erros
- capturar erros
- responder a erros de forma controlada

Principais ferramentas:

try
catch
finally
throw
Error
*/


//=========================================================================================
// 01 - ERROS COMUNS EM EXECUÇÃO
//=========================================================================================

/*
Alguns erros acontecem naturalmente durante a execução.

Exemplo clássico: acessar uma propriedade que não existe.
*/

const user = {
    name: "Lucas"
};

// console.log(user.address.city); // Isso causaria erro se address for undefined



//=========================================================================================
// 02 - BLOCO TRY / CATCH
//=========================================================================================

/*
try / catch permite capturar erros durante a execução do código.

Sintaxe:

try {
    // código que pode gerar erro
} catch (error) {
    // código executado caso ocorra erro
}
*/

try {

    const result = 10 / 0;

    console.log(result);

} catch (error) {

    console.log("An error occurred");

}



/*
Importante:

O objeto "error" contém informações úteis:

error.message
error.name
error.stack
*/



//=========================================================================================
// 03 - ACESSANDO INFORMAÇÕES DO ERRO
//=========================================================================================

try {

    const product = null;

    console.log(product.name);

} catch (error) {

    console.log("Error name:", error.name);
    console.log("Error message:", error.message);

}



//=========================================================================================
// 04 - THROW (LANÇANDO ERROS MANUALMENTE)
//=========================================================================================

/*
Além de capturar erros, também podemos CRIAR erros manualmente.

Isso é feito com a palavra-chave:

throw
*/

function divide(a, b) {

    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }

    return a / b;
}

try {

    const result = divide(10, 0);

    console.log(result);

} catch (error) {

    console.log("Operation failed:", error.message);

}



//=========================================================================================
// 05 - USANDO THROW PARA VALIDAÇÃO DE DADOS
//=========================================================================================

/*
Um uso muito comum de erros é a validação de dados.

Se os dados forem inválidos, lançamos um erro.
*/

function createUser(name, age) {

    if (typeof name !== "string" || name.length === 0) {
        throw new Error("Invalid name");
    }

    if (typeof age !== "number" || age < 0) {
        throw new Error("Invalid age");
    }

    return {
        name,
        age
    };
}

try {

    const user = createUser("Maria", 25);

    console.log(user);

} catch (error) {

    console.log("User creation failed:", error.message);

}



//=========================================================================================
// 06 - BLOCO FINALLY
//=========================================================================================

/*
O bloco finally sempre será executado,
independentemente de ocorrer erro ou não.

Sintaxe:

try { }
catch { }
finally { }
*/

function processPayment() {

    try {

        console.log("Processing payment...");

    } catch (error) {

        console.log("Payment failed");

    } finally {

        console.log("Operation finished");

    }

}

processPayment();



//=========================================================================================
// 07 - BOAS PRÁTICAS
//=========================================================================================

/*
1. Use erros para indicar falhas reais no sistema.

2. Utilize mensagens claras.

3. Valide dados de entrada.

4. Evite ignorar erros silenciosamente.

Exemplo ruim:

catch (error) {}

Exemplo melhor:

catch (error) {
    console.log(error.message);
}
*/


//=========================================================================================
// 08 - DESAFIO
//=========================================================================================

/*
Crie uma função chamada:

withdraw(balance, amount)

Regras:

1. Se amount for menor ou igual a 0 → lançar erro
2. Se amount for maior que balance → lançar erro
3. Caso contrário → retornar novo saldo

Exemplo esperado:

withdraw(1000, 200)

resultado:

800
*/


// RESOLUÇÃO

function withdraw(balance, amount) {

    if (amount <= 0) {
        throw new Error("Withdrawal amount must be greater than zero");
    }

    if (amount > balance) {
        throw new Error("Insufficient balance");
    }

    return balance - amount;
}

try {

    const newBalance = withdraw(1000, 200);

    console.log("New balance:", newBalance);

} catch (error) {

    console.log("Error:", error.message);

}