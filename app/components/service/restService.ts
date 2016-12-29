/**
 * Created by eugen on 16.11.16.
 * changes by karstenAMF/oxanaZh
 */
import {Http, Headers} from '@angular/http';
import {RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

export class RestService {
  static get parameters() {
    return [[Http]];
  }

  private header: Headers;
  private authy = "";

  constructor(private http:Http) {
    this.header = new Headers;
    //this.header.append('Content-Type', 'application/json');
    //this.header.append('Accept', 'application/json');
  }

  authorizationHeader(token: any){
    this.header.append('Authorization', token);
	this.authy = token;
  }
  
  jsonHeader(){
    this.header.append('Content-Type', 'application/json');
  }
/*
// Einen einzelnen Task holen
  getTask(task_id) {
    var url = 'https://tinytaskrest.herokuapp.com/tasks/' + encodeURI(task_id);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
*/
  //Alle tasks holen
  getAllTasks(){
    var url = 'https://tinytaskrest.herokuapp.com/tasks/';
	let options = new RequestOptions({ headers: this.header });
	return this.http.get(url,options).map(res => res.json());
  }
  /*

  // Längen und  Breitengrad eines Tasks holen
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
*/
  //Eine Nutzer Bewertung holen
  getUserRating(user_id:any) {
    let url = 'https://tinytaskrest.herokuapp.com/users/' + encodeURI(user_id)+'/ratings';
	let options = new RequestOptions({ headers: this.header });
	return this.http.get(url,options).map(res => res.json());
  }

  //Gibt bestimmten Benutzer wieder
  getUserSingle(user_id:any){
	  console.log("this header");
	  console.log(this.header);
	 // console.log(this.header.authorization);
    var url = 'https://tinytaskrest.herokuapp.com/users/' + encodeURI(user_id);
	let response:any;
	let options = new RequestOptions({ headers: this.header });
	/*this.http.get(url,options)
		 .subscribe( data  => {console.log(data); response=data; return response},
					error =>  {console.log("erorro"); return "anything";});*/
	//this.http.get(url,options)
	//.map(data => {return data;});
	return this.http.get(url,options).map(res => res.json());

  }

  // Neuen Task erstellen , wahrscheinlich überarbeiten
  newTask(newTask: any){
    let url = 'https://tinytaskrest.herokuapp.com/tasks';
	this.jsonHeader();
	let options = new RequestOptions({ headers: this.header });
	console.log(newTask);
	return this.http.post(url,newTask,options).map((res: any) => res.json());
  }
/*
  //Task löschen
  deleteTask(task_id){
    var url = 'https://tinytaskrest.herokuapp.com/tasks/' + encodeURI(task_id);
    var response =this.http.delete(url);
    return response;
  }

  //Benutzer hinzufügen
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

  //User löschen
  deleteUser(user_id){
    var url = 'https://tinytaskrest.herokuapp.com/users/' + encodeURI(user_id);
    var response = this.http.delete(url);
    return response;

  }*/
}
