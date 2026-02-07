/*
===========================================================================================
   SWITCH STATEMENT
===========================================================================================
*/
// O switch statement é uma estrutura condicional utilizada quando
// existem múltiplos valores possíveis para uma mesma variável.
//
// Ele funciona como uma alternativa ao uso repetido de else if,
// deixando o código mais organizado e legível em certos cenários.

//=========================================================================================
// 01- Estrutura básica do switch
//=========================================================================================
// O switch avalia uma expressão e compara seu valor com diferentes cases.
// Quando encontra um case correspondente, executa o bloco associado.

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

//=========================================================================================
// 02- Uso do default
//=========================================================================================
// O default é executado quando nenhum case corresponde ao valor avaliado.

let statusCode = 404;

switch (statusCode) {
  case 200:
    console.log("Success");
    break;
  case 401:
    console.log("Unauthorized");
    break;
  case 403:
    console.log("Forbidden");
    break;
  default:
    console.log("Unknown status");
}

//=========================================================================================
// 03- Comparação direta de valores
//=========================================================================================
// O switch utiliza comparação estrita (===).
// Isso significa que o tipo do valor também importa.

let value = "5";

switch (value) {
  case 5:
    console.log("Number five");
    break;
  case "5":
    console.log("String five");
    break;
  default:
    console.log("Other value");
}

//=========================================================================================
// 04- Agrupando múltiplos cases
//=========================================================================================
// É possível agrupar vários cases que executam o mesmo bloco.

let month = 1;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Summer");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Autumn");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Winter");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Spring");
    break;
  default:
    console.log("Invalid month");
}

//=========================================================================================
// 05- Switch com strings
//=========================================================================================
// Switch é frequentemente usado para lidar com comandos ou opções textuais.

let userRole = "admin";

switch (userRole) {
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("Edit access");
    break;
  case "viewer":
    console.log("Read-only access");
    break;
  default:
    console.log("Unknown role");
}

//=========================================================================================
// 06- Uso do prompt() com switch
//=========================================================================================
// O valor recebido pelo prompt é sempre uma string.

let userOption = prompt("Choose an option: start | pause | stop");

switch (userOption) {
  case "start":
    console.log("System started");
    break;
  case "pause":
    console.log("System paused");
    break;
  case "stop":
    console.log("System stopped");
    break;
  default:
    console.log("Invalid option");
}

//=========================================================================================
// 07- Quando usar switch ou if / else
//=========================================================================================
// Use switch quando:
// - houver múltiplos valores possíveis para a mesma variável
// - as comparações forem diretas (===)
//
// Use if / else quando:
// - as condições forem baseadas em intervalos
// - houver operadores lógicos
// - as regras forem mais complexas

