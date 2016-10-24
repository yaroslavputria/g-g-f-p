import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
  constructor(private http: Http) {}

  getAllGists(name: string): Promise<any> {
    return this.http.get('https://api.github.com/users/' + name + '/gists')
    .toPromise()
    .then(res => res.json())
  } 

  filterFiles(gists: any[], type: string, language: string): any[] {//should create own data structures(intrafaces) instead 'any'!!!!!!
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

  filterByName(arrOfFiles: any[]): any[] {
    return arrOfFiles.map(file => file.filename);
  }

  getFileNamesPromise(criteriaObj: any): Promise<any[]> {
    return this.getAllGists(criteriaObj.userName)
    .then(gists => {
      let filteredGists = this.filterFiles(gists, criteriaObj.type, criteriaObj.lang);
      return this.filterByName(filteredGists);
    });
  }

//   getFilesForCurrentUser(userName, userNameInput) {
//     userNameInput.value = userName;
//     return this.getAllGists(userName)
//       .then(this.filterFiles)
//       .then(this.filterByName);
//   }

//   refreshGists (userName) {
//     return this.getAllGists(userName)
//       .then(this.filterFiles)
//       .then(this.filterByName);
//   }
}