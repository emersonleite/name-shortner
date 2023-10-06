let fullName = "Emerson Batista Leite da Silva Sauro";
let maxNameLength = 45;
let shortName = "";
const TOLERANCE = 50;
console.log("teste77");
// Função pra abreviação de nome --->
function nameShortner(fullName, maxNameLength) {
    let nameSplitted = fullName.split(" ");
    let nameSliced = fullName.slice(0, maxNameLength);
    let nameSlicedSplitted = nameSliced.split(" ");
    let index = nameSlicedSplitted.length - 1;
    let lastName = nameSlicedSplitted[index][0] + ".";
    if (nameSlicedSplitted[index] === nameSplitted[index]) lastName = nameSplitted[index];
    nameSlicedSplitted[index] = lastName;
    let nameSlicedSplittedFiltered = nameSlicedSplitted.filter((item)=>item !== "undefined.");
    // / \w{1,2}\.?/
    return nameSlicedSplittedFiltered.join(" ");
}
// <--- Função pra abreviação de nome
// Definindo container
const container = document.querySelector(".container");
// Definindo wrapper do nome --->
const nameWrapper = document.querySelector("#name-wrapper");
// <--- Definindo wrapper do nome
// Definindo wrapper da logo --->
const logoWrapper = document.querySelector(".logo-wrapper");
const logoWidth = logoWrapper.offsetWidth;
// <--- Definindo wrapper da logo
// Definindo wrapper da logOut --->
const logoOutWrapper = document.querySelector(".log-out-wrapper");
const logOutWidth = logoOutWrapper.offsetWidth;
// <--- Definindo wrapper da logOut
// Definindo tamanho máximo do nome --->
let maxNameWidth = container.offsetWidth - (logoWidth + logOutWidth + TOLERANCE);
//<--- Definindo tamanho máximo do nome
// Definindo nome abreviado e inserindo no wrapper --->
shortName = nameShortner(fullName, maxNameLength);
nameWrapper.innerHTML = shortName;
// Definindo tamanho atual do do nome
let spanWidth = nameWrapper.offsetWidth;
// <--- Definindo nome abreviado e inserindo no wrapper
// Descomentar
// Interando para obter nome atualizado
while(spanWidth >= maxNameWidth){
    shortName = nameShortner(fullName, maxNameLength);
    nameWrapper.innerHTML = shortName;
    spanWidth = nameWrapper.offsetWidth;
    maxNameLength--;
}

//# sourceMappingURL=index.377278e2.js.map
