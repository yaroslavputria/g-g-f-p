'use strict';

const l10nData = require('./l10n/lang.l10n.json');

import View from './view.js';

export default class Form extends View {
  constructor (formConfig) {
    super();
    let arrOfLangs = formConfig.arrOfLangs;
    let arrOfTypes = formConfig.arrOfTypes;
    let rootElement = formConfig.rootEl || document.body;
    //let form = document.createElement('form');
    //form.classList.add('g-g-f-n-p-form');
    // let userLabel = document.createElement('label');
    // userLabel.classList.add('g-g-f-n-p-label');
    // let langLabel = document.createElement('label');
    // langLabel.classList.add('g-g-f-n-p-label');
    // let typeLabel = document.createElement('label');
    // typeLabel.classList.add('g-g-f-n-p-label');
    // let userInput = document.createElement('input');
    // userInput.classList.add('g-g-f-n-p-textbox');
    // let langSelect = document.createElement('select');
    // langSelect.classList.add('g-g-f-n-p-select');
    // let typeSelect = document.createElement('select');
    // typeSelect.classList.add('g-g-f-n-p-select');
    // let btn = document.createElement('button');
    // btn.classList.add('g-g-f-n-p-button');

    //userLabel.setAttribute('for', 'username');
    // userLabel.innerHTML = l10nData.username;
    // userInput.id = 'username';
    // userInput.name = 'username';
    // userInput.type = 'text';
    // userLabel.appendChild(userInput);
    // form.appendChild(userLabel);

    //langLabel.setAttribute('for', 'language');
    // langLabel.innerHTML = l10nData.lang;
    // langSelect.id = 'lang';
    this._createOptionsList(langSelect, arrOfLangs);
    // langLabel.appendChild(langSelect);
    // form.appendChild(langLabel);

    //typeLabel.setAttribute('for', 'type');
    // typeLabel.innerHTML = l10nData.type;
    // typeSelect.id = 'type';
    this._createOptionsList(typeSelect, arrOfTypes);
    // typeLabel.appendChild(typeSelect);
    // form.appendChild(typeLabel);

    // btn.textContent = l10nData.find;
    // btn.id = 'find';
    // form.appendChild(btn);

    this.render(form, rootElement);
  }

  _createOptionsList (selectElement, options) {
    options.forEach(function (fileOption) {
      let option = document.createElement('option');
      option.innerHTML = option.value = fileOption;
      selectElement.appendChild(option);
    });
    return selectElement;
  }

  addProcessingListener (processing, rootEl) {
    let button = rootEl.querySelector('#find');
    button.addEventListener('click', function (el) {
      el.preventDefault();
      let filterCriterias = {
        userName: rootEl.querySelector('#username').value,
        type: rootEl.querySelector('#type').value,
        lang: rootEl.querySelector('#lang').value,
      };
      processing(filterCriterias);
    });
  }

}
