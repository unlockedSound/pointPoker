import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';

const localUrl = 'assets/data/issueData.json';
const urlGetTest = 'https://api.github.com/repos/unlockedSound/label_set/issues';
const urlPostTest = 'https://api.github.com/repos/unlockedSound/label_set/issues';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getIssue() {
    return this.http.get(urlGetTest);
  }
  postLabel() {
   return this.http.post(urlPostTest);

  }
}




