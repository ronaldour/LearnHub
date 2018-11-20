import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment'

@Injectable()
export class AppConfigService {
    private appConfig;

    constructor (private injector: Injector) { }

    loadAppConfig() {
        let http = this.injector.get(HttpClient);

        return http.get('/assets/config.json')
        .toPromise()
        .then(data => {
            this.appConfig = data;
        })
        .catch(error => {
         console.warn("Error loading config.json, using envrionment file instead");
         this.appConfig = environment;
     })
    }

    get config() {
        return this.appConfig;
    }
}