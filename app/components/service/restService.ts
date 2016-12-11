/**
 * Created by eugen on 16.11.16.
 * changes by karstenAMF/oxanaZh
 */
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

export class RestService {
  static get parameters() {
    return [[Http]];
  }

  private header: Headers;

  constructor(private http:Http) {
    this.header = new Headers;
    this.header.append('Content-Type', 'application/json');
    this.header.append('Accept', 'application/json');
    this.header.append('Authorization', '');
  }

  authorizationHeader(auth: any){
    this.header.append('Authorization', auth);
  }
/*
// Einen einzelnen Task holen
  getTask(task_id) {
    var url = 'https://tinytaskrest.herokuapp.com/tasks/' + encodeURI(task_id);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  //Alle tasks holen
  getAllTasks(){
    var url = 'https://tinytaskrest.herokuapp.com/tasks/';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  // L�ngen und  Breitengrad eines Tasks holen
  getTaskPosition(task_id){
    var url = 'https://tinytaskrest.herokuapp.com/tasks/' + encodeURI(task_id) + '/position';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  // Alle Bewerber eines Tasks hole
  getTaskBewerber(task_id){
    var url = 'https://tinytaskrest.herokuapp.com/tasks/' + encodeURI(task_id) + '/applications';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  //Eingegrenzten Tasks holen
  //getTaskOptional(radius , startzeit){
    //var url = ' https://tinytaskrest.herokuapp.com/tasks?query=&query=' + encodeURI(radius) +'&' +'&query=&query=' + encodeURI(startzeit)+'&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    //var response = this.http.get(url).map(res => res.json());
    //return response;
  //}

  //Liste aller Benutzer holen
  getUserAll(){
    var url = 'https://tinytaskrest.herokuapp.com/users';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  //Eine Nutzer Bewertung holen
  getUserRating(user_id) {
    var url = 'https://tinytaskrest.herokuapp.com/users/' + encodeURI(user_id)+'/rating';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
*/
  //Gibt bestimmten Benutzer wieder
  getUserSingle(user_id:any){
    var url = 'https://tinytaskrest.herokuapp.com/users/' + encodeURI(user_id);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
/*
  // Neuen Task erstellen , wahrscheinlich �berarbeiten
  newTask(newTask){
    var url = 'https://tinytaskrest.herokuapp.com/tasks/';
    var response = this.http.post(url,newTask,null);
    return response;
  }

  //Task l�schen
  deleteTask(task_id){
    var url = 'https://tinytaskrest.herokuapp.com/tasks/' + encodeURI(task_id);
    var response =this.http.delete(url);
    return response;
  }

  //Benutzer hinzuf�gen
  newUser(newUser){
    var url = 'https://tinytaskrest.herokuapp.com/users/';
    var response = this.http.post(url,newUser,null);
    return response;
  }

  //Bewertung abgeben
  newUserRating(user_id) {
    var url = 'https://tinytaskrest.herokuapp.com/users/' + encodeURI(user_id) + '/rating';
    var response = this.http.post(url,user_id,null);
    return response;
  }

  //User l�schen
  deleteUser(user_id){
    var url = 'https://tinytaskrest.herokuapp.com/users/' + encodeURI(user_id);
    var response = this.http.delete(url);
    return response;

  }*/
}
