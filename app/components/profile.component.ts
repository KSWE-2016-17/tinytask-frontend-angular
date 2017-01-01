import {RestService} from "./service/restService";
import {Auth} from './service/auth.service';
import {Inject} from '@angular/core';
import { Http,Response } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import { Component } from '@angular/core';

import {User} from "./class/user";

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/views/profile.html',
  providers: [Auth, RestService, User],
  styleUrls: ['app/components/views/styles/login.css']
})
export class ProfileComponent  { 
	constructor(private auth:Auth, 
	private rest:RestService, 
	private http:Http,
	private user:User){
		this.checkForLogin();
		this.getUser();
	}
	
	private checkForLogin(){
		console.log("Checking for a valid login...");
		if(!localStorage.getItem("id_token"))
			window.location.href = "";
	}
	
	private getUser(){
		let string = "Bearer ";
		let token = localStorage.getItem('id_token');
		console.log(token);
		string = string + token;
		console.log(string);
		this.rest.authorizationHeader(string);
		let user_id = localStorage.getItem('user_id');
		//let result = this.rest.getUserSingle(user_id);
		let result = "";
		//this.rest.getUserSingle(user_id).subscribe((data:any)=>{result = data});
		
		this.rest.getUserSingle(user_id)
		.subscribe((data:any) =>{result = data; console.log("inner"); console.log(result); this.fillForm(data);});
		
		this.rest.getUserRating(user_id)
		.subscribe((data:any) =>{this.loadRatings(data);});
		/*let string = "Bearer ";
		let token = localStorage.getItem('id_token');
		console.log(token);
		string = string + token;
		console.log(string);
		let headers = new Headers({ 'Authorization': string });
		let options = new RequestOptions({ headers: headers });
		console.log(headers);
		let result = this.http.get("https://tinytaskrest.herokuapp.com/", options)
		 .subscribe( data  => {console.log(data); this.registered = true;this.initenter(data);},
					 error =>  console.log("erorro"));*/
	}
	
	private fillForm(data:any){
		this.user.id = data.id;
		this.user.name = data.displayName;
		this.user.email = data.email;
		this.user.img = data.picture;
	}
	
	private loadRatings(data:any){
		if(data.results==0){
			this.user.ratings = "Bisher hat dich noch kein anderer User bewertet!";
		}
		else{
			this.user.ratings = data;
		}
	}
	
	private changeMail(){
		
	}
	
 }
