// Seleciona os elementos HTML
const addressBar = document.querySelector('#address-bar');
const backButton = document.querySelector('#back-button');
const navigateButton = document.querySelector('#navigate-button');
const newTabButton = document.querySelector('#new-tab-button');
const urlInput = document.querySelector('#address-bar input[type="text"]');
const tabContainer = document.querySelector('.tab-container');
const browserWindow = document.querySelector('#browser-window');

// Armazena as informações de cada aba
let tabs = [];

// Navega para a URL especificada
function navigateTo(url) {
  // Atualiza o URL do iframe
  browserWindow.src = url;
  // Adiciona o URL ao histórico de navegação
  history.pushState({url: url}, '', url);
}

// Voltar para a página anterior
function goBack() {
  history.back
