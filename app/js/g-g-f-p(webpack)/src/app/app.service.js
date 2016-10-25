"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var AppService = (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getAllGists = function (name) {
        return this.http.get('https://api.github.com/users/' + name + '/gists')
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    AppService.prototype.filterFiles = function (gists, type, language) {
        var arrOfFiles = [];
        for (var i = 0; i < gists.length; i++) {
            for (var prop in gists[i].files) {
                if (gists[i].files.hasOwnProperty(prop)) {
                    var property = gists[i].files[prop];
                    if ((!type || property.type === type) && (!language || property.language === language)) {
                        arrOfFiles.push(property);
                    }
                }
            }
        }
        return arrOfFiles;
    };
    AppService.prototype.filterByName = function (arrOfFiles) {
        return arrOfFiles.map(function (file) { return file.filename; });
    };
    AppService.prototype.getFileNamesPromise = function (criteriaObj) {
        var _this = this;
        return this.getAllGists(criteriaObj.userName)
            .then(function (gists) {
            var filteredGists = _this.filterFiles(gists, criteriaObj.type, criteriaObj.lang);
            return _this.filterByName(filteredGists);
        });
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map