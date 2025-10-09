// Seleção dos elementos por id
const elements = {
  promptTitle: document.getElementById('prompt-title'),
  promptContent: document.getElementById('prompt-content'),
  titleWrapper: document.getElementById('title-wrapper'),
  contentWrapper: document.getElementById('content-wrapper'),
  btnOpen: document.getElementById('btn-open'),
  btnCollapse: document.getElementById('btn-collapse'),
  sidebar: document.querySelector('.sidebar'),
};

function updateEditableWrapperState(element, wrapper) {
  const hastext = element.textContent.trim().length > 0;
    wrapper.classList.toggle('is-empty', !hastext);
}

function updateAllEditableStates() {
  updateEditableWrapperState(elements.promptTitle, elements.titleWrapper);
  updateEditableWrapperState(elements.promptContent, elements.contentWrapper);
}

function attachAllEditableHandlers() {
  elements.promptTitle.addEventListener('input', function () {
    updateEditableWrapperState(elements.promptTitle, elements.titleWrapper);
  });
  elements.promptContent.addEventListener('input', function () {
    updateEditableWrapperState(elements.promptContent, elements.contentWrapper);
  });
}

function openSidebar() {
  elements.sidebar.style.display = 'flex';
  elements.btnOpen.style.display = 'none';
}

function closeSidebar() {
  elements.sidebar.style.display = 'none';
  elements.btnOpen.style.display = 'block';
}



function init() {
  attachAllEditableHandlers();
  updateAllEditableStates();
  elements.sidebar.style.display = '';
  elements.btnOpen.style.display = 'none';
  elements.btnOpen.addEventListener('click', openSidebar);
  elements.btnCollapse.addEventListener('click', closeSidebar);
}

init();