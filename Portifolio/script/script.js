//variáveis
var lang = navigator.language

//botões
function pagina1para2(){
    window.location.href='./index2.html'
};

function pagina2para1(){
    window.location.href='./index.html'
};  

//lingua
function navegador() {
    document.getElementById("dem").innerHTML = "A língua desse navegador é " + navigator.language;
} navegador();

function lingua(){
if (lang == "pt-BR"){
    document.getElementById("brzera").innerHTML = "Tu é um br! Maneiro"
} else {
    document.getElementById("brzera").innerHTML = "Eca, gringo."
}} lingua();    

