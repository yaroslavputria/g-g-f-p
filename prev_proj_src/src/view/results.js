'use strict';

import View from './view.js';

export default class Files extends View {
  createResultList (fileNames, rootEl) {
    let prevResult = rootEl.querySelector('#list');
    let rootElement = rootEl || document.body;
    let list = document.createElement('ul');
    if (prevResult) {
      prevResult.remove();
    }

    list.id = 'list';
    for (let i = 0; i < fileNames.length; i++) {
      let newLi = document.createElement('li');
      newLi.innerHTML = fileNames[i];
      list.classList.add('g-g-f-n-p-list');
      list.appendChild(newLi);
    }

    this.render(list, rootElement);

  }
}
