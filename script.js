// Seleciona os elementos dos botões de acessibilidade
const btnAumentarFonte = document.getElementById('aumentar-fonte');
const btnDiminuirFonte = document.getElementById('diminuir-fonte');
const btnAlternaContraste = document.getElementById('alterna-contraste');
const corpo = document.body;

// Controle do tamanho da fonte
let tamanhoFonteAtual = 16; // valor base em pixels

function ajustarFonte(valor) {
  tamanhoFonteAtual += valor;
  if (tamanhoFonteAtual < 12) tamanhoFonteAtual = 12; // mínimo 12px
  if (tamanhoFonteAtual > 24) tamanhoFonteAtual = 24; // máximo 24px
  corpo.style.fontSize = tamanhoFonteAtual + 'px';
}

btnAumentarFonte?.addEventListener('click', () => ajustarFonte(2));
btnDiminuirFonte?.addEventListener('click', () => ajustarFonte(-2));

// Controle do contraste
btnAlternaContraste?.addEventListener('click', () => {
  corpo.classList.toggle('contraste-alto');
});

// ScrollReveal - anima a entrada dos elementos
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal().reveal('header', { delay: 300, origin: 'top', distance: '50px' });
  ScrollReveal().reveal('#inicio .d-flex', { delay: 500, origin: 'left', distance: '100px' });
  ScrollReveal().reveal('#galeria', { delay: 700, origin: 'bottom', distance: '50px' });
  ScrollReveal().reveal('#contato', { delay: 900, origin: 'right', distance: '100px' });
}

// Controle do menu acessibilidade para mostrar/esconder as opções
const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

if (botaoAcessibilidade && opcoesAcessibilidade) {
  botaoAcessibilidade.addEventListener('click', (
