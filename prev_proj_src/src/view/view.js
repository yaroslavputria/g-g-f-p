'use strict';

export default class View {
  render (data, rootElement) {
    console.log('Render');
    if (!rootElement) {
      rootElement = document.body;
    }

    rootElement.appendChild(data);
  }

}
