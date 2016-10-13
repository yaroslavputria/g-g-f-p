'use strict';

export default class Model {
 
  init () {
    console.log('Inited');
  }

  getAllGists (name) {
    return fetch('https://api.github.com/users/' + name + '/gists', {
      method: 'GET',
      mode: 'cors',
    })
    .then(res => res.json());
  } 

  filterFiles (gists, type, language) {
    let arrOfFiles = [];
    for (let i = 0; i < gists.length; i++) {
      for (let prop in gists[i].files) {
        if (gists[i].files.hasOwnProperty(prop)) {
          let property = gists[i].files[prop];
          if ((!type || property.type === type) && (!language || property.language === language)) {
            arrOfFiles.push(property);
          }
        }
      }
    }

    return arrOfFiles;
  }

  filterByName (arrOfFiles) {
    return arrOfFiles.map(file => file.filename);
  }

  getFileNamesPromise (criteriaObj) {
    return this.getAllGists(criteriaObj.userName)
    .then(gists => {
      let filteredGists = this.filterFiles(gists, criteriaObj.type, criteriaObj.lang);
      return this.filterByName(filteredGists);
    });
  }

  getFilesForCurrentUser (userName, userNameInput) {
    userNameInput.value = userName;
    return this.getAllGists(userName)
      .then(this.filterFiles)
      .then(this.filterByName);
  }

  refreshGists (userName) {
    return this.getAllGists(userName)
      .then(this.filterFiles)
      .then(this.filterByName);
  }
}
