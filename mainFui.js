
const botaoAdd = document.getElementById('buttonAdicionar');
const botaoVoltoJa = document.getElementById('buttonVoltoJa');
const botaoAteAmanha = document.getElementById('buttonAteAmanha');
const botaoFerias = document.getElementById('buttonFerias');
const botaoLimpar = document.getElementById('buttonLimpar');
const botaoAlmoco = document.getElementById('buttonSairAlmocar');

function AtualizaPagina() {
    //window.location.href = 'https://linkteste';
}

let contador = 0;

const pessoas = ["Teste1", "Teste2","Teste3","Teste4","Teste5","Teste6"];

while (contador < pessoas.length) {
    const pessoaId = document.getElementById(pessoas[contador]);
    const botaoPlantonista = document.getElementById(`button.${pessoas[contador]}`);
    const nomePlantonista = document.getElementById(`nome.${pessoas[contador]}`);

    if (pessoaId.classList.contains('plantonista')) {
        pessoaId.classList.add('contornoVermelho');
        botaoPlantonista.classList.add('botaoVermelho');
        nomePlantonista.classList.add('nomeVermelho');
    } else {
        pessoaId.classList.remove('contornoVermelho');
        botaoPlantonista.classList.remove('botaoVermelho');
        nomePlantonista.classList.remove('nomeVermelho');
    }

    botaoPlantonista.addEventListener('click', function () {
        if (botaoPlantonista.classList.contains('botaoVermelho')) {
            botaoPlantonista.classList.remove('botaoVermelho');
        } else {
            botaoPlantonista.classList.add('botaoVermelho');
        }
    });

    var textoId = pessoaId.querySelector('.texto');
    if(textoId.textContent.includes('férias') || textoId.textContent.includes('Férias')){
        pessoaId.classList.remove('verde');
        pessoaId.classList.remove('amarelo');
        pessoaId.classList.add('deFerias');
    }

    contador = contador + 1;
}

botaoAlmoco.addEventListener('click', function () {
    let inputNumberHora;
    do {
        let tempoUsuarioHora = window.prompt("Quanto tempo? (em horas)");
        inputNumberHora = parseInt(tempoUsuarioHora);
        if (isNaN(inputNumberHora)) {
            alert("Por favor, insira o número corretamente.");
        } else {
            const textoAlmoco = `Almoçando. Volto em ${tempoUsuarioHora} hora(s).`;
            //const linkAlmoco = 'https://linkteste' + textoAlmoco;
            //window.location.href = linkAlmoco;
        }
    } while (isNaN(inputNumber));
});

botaoVoltoJa.addEventListener('click', function () {
    let inputNumber;
    do {
        let tempoUsuario = window.prompt("Quanto tempo? (em minutos)");
        inputNumber = parseFloat(tempoUsuario);
        if (isNaN(inputNumber)) {
            alert("Por favor, digite apenas números.");
        } else {
            const texto = `Volto já. Retorno em ${tempoUsuario} minutos.`;
            //const link = 'https://linkteste' + texto;
            //window.location.href = link;
        }
    } while (isNaN(inputNumberHora));
});

botaoFerias.addEventListener('click', function () {
    let inputDate;
    do {
        let dataUser = window.prompt("Em qual data você retornará?");
        inputDate = parseFloat(dataUser);
        if (isNaN(inputDate)) {
            alert("Por favor, digite a data corretamente.");
        } else {
            const texto = `DH ou férias. Volto dia ${dataUser}.`;
            //const link = 'https://linkteste' + texto;
            //window.location.href = link;
        }
    } while (isNaN(inputNumberHora));
});

botaoAdd.addEventListener('click', function () {
    let mensagemUsuario = window.prompt("O que quer deixar como recado?");
    //const linkRecado = 'https://linkteste' + mensagemUsuario;
    //window.location.href = linkRecado;
});

botaoAteAmanha.addEventListener('click', function () {
    const date = new Date();
    const today = date.toDateString();
    console.log(today);

    if (today.includes('Fri')) {
        const texto = 'Bom fim de semana!';
        //const link = 'https://linkteste' + texto;
        //console.log(texto);
        //window.location.href = link;
    } else {
        const texto = 'Ate amanhã.';
        //const link = 'https://linkteste' + texto;
        //window.location.href = link;
        //console.log(texto)
    }


});

document.getElementById('buttonLimpar').addEventListener('click', function () {
    //var link = 'https://linkteste';
    //window.location.href = link;
});
function alteraData(){
    const date = new Date();
    const todaySexta = date.toDateString();
    if (todaySexta.includes('Fri')) {
        botaoAteAmanha.innerText = 'Bom fim de semana!';
    }
}
window.onload = alteraData();

//function redirecionarParaPagina(xp) {
    //window.location.href = 'https://linkteste' + xp;
//}

setInterval(AtualizaPagina, 60000);

