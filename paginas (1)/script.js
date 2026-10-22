// ==========================================
// PERGUNTAS E PISTAS
// ==========================================

const perguntas = [

    {
        pergunta:
            "Os celulares começaram a receber repetidamente apenas a letra “L”. Qual interpretação é mais coerente em uma investigação?",

        alternativas: [
            "A letra representa a possível inicial da vítima.",
            "A letra pode ter sido usada para direcionar a investigação para uma interpretação específica."
        ],

        resposta: 1,

        pista:
            "A mensagem pode não estar tentando dizer quem fez. Pode estar tentando indicar algo relacionado ao local, ao objeto ou ao segredo."
    },

    {
        pergunta:
            "A vítima havia anunciado que revelaria um segredo e desapareceu justamente naquela noite. Qual informação teria maior valor investigativo?",

        alternativas: [
            "Quem tinha um motivo para impedir a revelação.",
            "Quem demonstrou curiosidade sobre o segredo."
        ],

        resposta: 0,

        pista:
            "O segredo era importante para mais de uma pessoa, mas havia alguém que tinha mais a perder caso ele fosse revelado."
    },

    {
        pergunta:
            "Uma pessoa afirmou estar em determinado lugar durante o período em que ninguém conseguia confirmar sua presença. O que torna essa informação suspeita?",

        alternativas: [
            "A ausência de uma testemunha independente.",
            "O fato de a pessoa parecer nervosa ao contar a história."
        ],

        resposta: 0,

        pista:
            "Existe um álibi sem confirmação entre os envolvidos."
    },

    {
        pergunta:
            "Após o desaparecimento, alguém apareceu com pequenos arranhões nas mãos. Qual conclusão é mais correta?",

        alternativas: [
            "Os arranhões provam que houve luta.",
            "Os arranhões são uma evidência circunstancial que precisa ser relacionada ao restante dos fatos."
        ],

        resposta: 1,

        pista:
            "Os ferimentos podem estar relacionados ao ocorrido, mas não são suficientes para identificar o culpado."
    },

    {
        pergunta:
            "Alguém foi visto entrando no quarto da vítima tarde da noite usando uma lanterna e apresentou uma justificativa simples para isso. Qual detalhe seria mais importante verificar?",

        alternativas: [
            "Se realmente havia necessidade de usar uma lanterna naquele momento.",
            "Se a pessoa costumava usar lanternas durante a noite."
        ],

        resposta: 0,

        pista:
            "A ida ao quarto aconteceu depois de algo importante ter sido descoberto."
    },

    {
        pergunta:
            "Uma pessoa passou a falar excessivamente depois do ocorrido, enquanto outra ficou extremamente nervosa. O que isso permite concluir?",

        alternativas: [
            "Quem fala demais é necessariamente culpado.",
            "Mudanças de comportamento podem ser relevantes, mas precisam ser confrontadas com fatos objetivos."
        ],

        resposta: 1,

        pista:
            "O comportamento mais chamativo não necessariamente pertence ao culpado."
    },

    {
        pergunta:
            "Se a vítima pretendia revelar algo sobre uma pessoa específica, qual seria a pergunta investigativa mais importante?",

        alternativas: [
            "Quem tinha conhecimento de que o segredo seria revelado?",
            "Quem era o amigo mais próximo da vítima?"
        ],

        resposta: 0,

        pista:
            "Alguém sabia antecipadamente que a vítima pretendia revelar o segredo."
    },

    {
        pergunta:
            "Considere a sequência: caminhada → desaparecimento → procura → descoberta do corpo → mensagens. Qual informação poderia desmontar uma versão falsa?",

        alternativas: [
            "Descobrir que determinada pessoa esteve em um lugar incompatível com o horário declarado.",
            "Descobrir quem ficou mais assustado após encontrar o corpo."
        ],

        resposta: 0,

        pista:
            "A investigação deve se concentrar nos horários, porque uma das versões não se encaixa perfeitamente na cronologia."
    },

    {
        pergunta:
            "Se a mensagem tivesse sido enviada pela própria vítima antes de morrer, qual hipótese seria mais interessante investigar?",

        alternativas: [
            "Que “L” fosse apenas sua inicial.",
            "Que “L” tivesse outro significado relacionado a um objeto importante da noite."
        ],

        resposta: 1,

        pista:
            "A letra não significa literalmente Lara. Ela indica a lanterna, um objeto importante para a investigação."
    },

    {
        pergunta:
            "Uma testemunha afirma ter ido buscar um objeto específico, mas seu comportamento indica que estava procurando outra coisa. O que isso pode sugerir?",

        alternativas: [
            "Que ela estava escondendo sua verdadeira intenção.",
            "Que necessariamente foi ela quem matou a vítima."
        ],

        resposta: 0,

        pista:
            "A pessoa que esteve no quarto pode ter ido atrás de alguma coisa relacionada ao segredo, e não de um objeto comum."
    },

    {
        pergunta:
            "Agora junte as informações: havia um segredo; alguém sabia que ele seria revelado; existe um álibi não confirmado; alguém esteve no quarto da vítima; a mensagem “L” possui outro significado; o culpado estava entre vocês. Qual tipo de evidência seria mais decisivo?",

        alternativas: [
            "Uma prova que conecte uma pessoa ao segredo e ao momento do crime.",
            "O comportamento nervoso de uma pessoa."
        ],

        resposta: 0,

        pista:
            "A pessoa que você procura tinha conhecimento prévio do segredo e uma oportunidade que os outros não tinham."
    },

    {
        pergunta:
            "A letra L aparece repetidamente. Imagine que ela não signifique “Lara”, mas uma palavra. A vítima havia dito que iria “contar tudo”. Alguém sabia exatamente o que seria contado. Essa mesma pessoa tinha uma razão para entrar no quarto da vítima naquela noite. E uma das versões apresentadas possui uma lacuna de horário. Qual combinação de características identifica o assassino?",

        alternativas: [
            "Pessoa que tinha interesse no segredo + conhecia a intenção da vítima + apresentou uma versão com uma lacuna de horário.",
            "Pessoa que estava nervosa + tinha discutido com a vítima + apresentou comportamento estranho depois da descoberta."
        ],

        resposta: 0,

        pista:
            "A combinação de motivo, conhecimento prévio, oportunidade e contradição no horário aponta para a pessoa que tinha mais a perder com a revelação."
    }

];


// ==========================================
// VARIÁVEIS
// ==========================================

let perguntaAtual = 0;

let respostaSelecionada = null;

let pistasDescobertas = [];

let acusadoSelecionado = null;

let etapaRevelacao = 0;


// ==========================================
// INÍCIO
// ==========================================

function iniciarInvestigacao() {

    document.getElementById("tela-inicial").style.display = "none";

    document.getElementById("tela-introducao").style.display = "block";

}


// ==========================================
// INTRODUÇÃO → HISTÓRIA
// ==========================================

function continuarHistoria() {

    document.getElementById("tela-introducao").style.display = "none";

    document.getElementById("tela-historia").style.display = "block";

}


// ==========================================
// HISTÓRIA → SUSPEITOS
// ==========================================

function continuarInvestigacao() {

    document.getElementById("tela-historia").style.display = "none";

    document.getElementById("tela-suspeitos").style.display = "block";

}


// ==========================================
// SUSPEITOS → INVESTIGAÇÃO
// ==========================================

function irParaPerguntas() {

    document.getElementById("tela-suspeitos").style.display = "none";

    document.getElementById("tela-investigacao").style.display = "block";

    perguntaAtual = 0;

    respostaSelecionada = null;

    pistasDescobertas = [];

    carregarPergunta();

}


// ==========================================
// CARREGAR PERGUNTA
// ==========================================

function carregarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("numero-pergunta").textContent =
        perguntaAtual + 1;

    document.getElementById("texto-pergunta").textContent =
        pergunta.pergunta;

    document.getElementById("feedback-pergunta").textContent = "";

    document.getElementById("botao-responder").classList.remove("escondida");

    document.getElementById("botao-proxima").classList.add("escondida");

    respostaSelecionada = null;


    const progresso =
        ((perguntaAtual + 1) / perguntas.length) * 100;

    document.getElementById("barra-progresso").style.width =
        progresso + "%";


    const container =
        document.getElementById("alternativas");

    container.innerHTML = "";


    pergunta.alternativas.forEach(function(alternativa, indice) {

        const botao = document.createElement("button");

        botao.className = "alternativa";

        botao.textContent = alternativa;

        botao.onclick = function() {

            selecionarResposta(indice);

        };

        container.appendChild(botao);

    });

}


// ==========================================
// SELECIONAR RESPOSTA
// ==========================================

function selecionarResposta(indice) {

    const botoes =
        document.querySelectorAll(".alternativa");

    botoes.forEach(function(botao) {

        botao.classList.remove("selecionada");

    });

    botoes[indice].classList.add("selecionada");

    respostaSelecionada = indice;

}


// ==========================================
// RESPONDER
// ==========================================

function responderPergunta() {

    if (respostaSelecionada === null) {

        document.getElementById("feedback-pergunta").textContent =
            "⚠️ Escolha uma alternativa primeiro.";

        return;
    }


    const pergunta = perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".alternativa");


    botoes.forEach(function(botao) {

        botao.disabled = true;

    });


    document.getElementById("botao-responder").classList.add("escondida");


    if (respostaSelecionada === pergunta.resposta) {

        botoes[respostaSelecionada].classList.add("correta");

        document.getElementById("feedback-pergunta").textContent =
            "✅ CORRETO! Nova pista desbloqueada.";

        adicionarPista(pergunta.pista);

    } else {

        botoes[respostaSelecionada].classList.add("errada");

        botoes[pergunta.resposta].classList.add("correta");

        document.getElementById("feedback-pergunta").textContent =
            "❌ INCORRETO. A resposta correta foi destacada.";
    }


    document.getElementById("botao-proxima").classList.remove("escondida");


    if (perguntaAtual === perguntas.length - 1) {

        document.getElementById("botao-proxima").textContent =
            "IR PARA ACUSAÇÃO";

    }

}


// ==========================================
// ADICIONAR PISTA
// ==========================================

function adicionarPista(pista) {

    pistasDescobertas.push(pista);

    document.getElementById("contador-pistas").textContent =
        `${pistasDescobertas.length} de ${perguntas.length} pistas descobertas`;


    const lista =
        document.getElementById("lista-pistas");

    lista.innerHTML = "";


    pistasDescobertas.forEach(function(pista, indice) {

        const elemento = document.createElement("div");

        elemento.className = "pista";

        elemento.textContent =
            `Pista ${indice + 1}: ${pista}`;

        lista.appendChild(elemento);

    });

}


// ==========================================
// PRÓXIMA PERGUNTA
// ==========================================

function proximaPergunta() {

    if (perguntaAtual === perguntas.length - 1) {

        irParaAcusacao();

        return;

    }


    perguntaAtual++;

    carregarPergunta();

}


// ==========================================
// INVESTIGAÇÃO → ACUSAÇÃO
// ==========================================

function irParaAcusacao() {

    document.getElementById("tela-investigacao").style.display = "none";

    document.getElementById("tela-acusacao").style.display = "block";

}


// ==========================================
// SELECIONAR ACUSADO
// ==========================================

function selecionarAcusado(nome, botao) {

    acusadoSelecionado = nome;

    const botoes =
        document.querySelectorAll(".suspeito-acusacao");


    botoes.forEach(function(botao) {

        botao.classList.remove("acusado-selecionado");

    });


    botao.classList.add("acusado-selecionado");


    document.getElementById("acusacao-escolhida").textContent =
        `Suspeito escolhido: ${nome}`;


    document.getElementById("botao-confirmar-acusacao").disabled =
        false;

}


// ==========================================
// CONFIRMAR ACUSAÇÃO
// ==========================================

function confirmarAcusacao() {

    if (acusadoSelecionado === null) {

        return;

    }


    if (acusadoSelecionado === "Sara") {

        iniciarRevelacao();

        return;

    }


    const resultado =
        document.getElementById("resultado-acusacao");

    const titulo =
        document.getElementById("titulo-resultado");

    const texto =
        document.getElementById("texto-resultado");


    resultado.classList.remove("escondida");


    titulo.textContent =
        "❌ ACUSAÇÃO INCORRETA";


    texto.textContent =
        "Essa acusação não explica todas as evidências. Algumas pistas ainda permanecem sem resposta.";

}


// ==========================================
// INICIAR REVELAÇÃO
// ==========================================

function iniciarRevelacao() {

    document.getElementById("tela-acusacao").style.display = "none";

    document.getElementById("tela-revelacao").style.display = "block";

    etapaRevelacao = 0;

    mostrarRevelacao();

}


// ==========================================
// CONTEÚDO DAS REVELAÇÕES
// ==========================================

const revelacoes = [

    {
        titulo: "O SEGREDO",

        texto:
            "Lara havia descoberto que Sara vinha roubando dinheiro e objetos pessoais de amigos e parentes. Ela queria confirmar todas as informações antes de revelar a verdade."
    },

    {
        titulo: "QUEM SABIA",

        texto:
            "Sara sabia que Lara estava investigando o segredo e também sabia que Lara pretendia contar tudo durante a viagem."
    },

    {
        titulo: "O GALPÃO",

        texto:
            "Naquela noite, Sara seguiu Lara até o galpão. As duas discutiram porque Sara queria impedir que o segredo fosse revelado."
    },

    {
        titulo: "O QUARTO",

        texto:
            "Depois do ocorrido, Sara voltou ao quarto de Lara. Ela afirmou que estava ali apenas para pegar um casaco, mas estava procurando as anotações."
    },

    {
        titulo: "AS ANOTAÇÕES",

        texto:
            "As anotações que poderiam confirmar o segredo desapareceram. A ida de Sara ao quarto aconteceu justamente depois de algo importante ter sido descoberto."
    },

    {
        titulo: "A LANTERNA",

        texto:
            "A letra “L” das mensagens não significava Lara. Ela indicava a lanterna — um objeto que estava ligado aos acontecimentos daquela noite."
    },

    {
        titulo: "A VERDADE",

        texto:
            "Sara tinha motivo, conhecimento prévio e oportunidade. Seu relato também apresentava uma lacuna de horário. Ao cruzar todas essas evidências, a investigação aponta para Sara como responsável pela morte de Lara."
    }

];


// ==========================================
// MOSTRAR REVELAÇÃO
// ==========================================

function mostrarRevelacao() {

    const revelacao =
        revelacoes[etapaRevelacao];


    document.getElementById("numero-revelacao").textContent =
        etapaRevelacao + 1;


    document.getElementById("titulo-revelacao").textContent =
        revelacao.titulo;


    document.getElementById("texto-revelacao").textContent =
        revelacao.texto;


    const botao =
        document.getElementById("botao-revelacao");


    if (etapaRevelacao === revelacoes.length - 1) {

        botao.textContent =
            "ENCERRAR CASO";

    } else {

        botao.textContent =
            "CONTINUAR REVELAÇÃO";

    }

}


// ==========================================
// PRÓXIMA REVELAÇÃO
// ==========================================

function proximaRevelacao() {

    if (etapaRevelacao === revelacoes.length - 1) {

        encerrarCaso();

        return;

    }


    etapaRevelacao++;

    mostrarRevelacao();

}


// ==========================================
// ENCERRAR CASO
// ==========================================

function encerrarCaso() {

    document.getElementById("botao-revelacao").textContent =
        "CASO ENCERRADO";


    document.getElementById("botao-revelacao").disabled =
        true;

}


// ==========================================
// REINICIAR JOGO
// ==========================================

function reiniciarJogo() {

    location.reload();

}
