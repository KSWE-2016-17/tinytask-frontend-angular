import {Auth} from './service/auth.service';
import {Inject} from '@angular/core';
import { Http,Response } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';import { Component } from '@angular/core';
import {RestService} from "./service/restService";

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/views/start.html',
  providers: [Auth, RestService],
  styleUrls: ['app/components/views/styles/login.css']
})
export class StartComponent  { 
	constructor(private auth:Auth, private rest:RestService){
		this.checkForLogin();
		this.loadTasks();
	}
	
	private tasks: any;
	private my_tasks: any;
	
	private checkForLogin(){
		console.log("Checking for a valid login...");
		if(!localStorage.getItem("id_token"))
			window.location.href = "";
	}
	
	private loadTasks(){
		let string = "Bearer ";
		let token = localStorage.getItem('id_token');
		console.log(token);
		string = string + token;
		console.log(string);
		this.rest.authorizationHeader(string);
		console.log("These are my tasks");
		this.rest.getAllTasks()
		.subscribe((data:any) =>{console.log(data);
		this.tasks = [];
		//console.log(Object.values(data)); TS spinnt
		for(let x in data){
			this.tasks.push(data[x]);
		}
		console.log(this.tasks);
		this.filter();
		});
	}
	
	private filter(){
		this.tasks.forEach((x:any) => { 
			if(x.assignedTo!==null)
			{
				let cut:any;
				console.log(x);
				console.log(x.assignedTo);
				cut = x.assignedTo.split("/users/");
				if(cut[1] === localStorage.getItem("user_id")){
					this.my_tasks.push(x);
				}
			}
			
		})
		console.log(this.my_tasks);
		if(this.my_tasks === undefined){
			this.my_tasks = [];
		}
		console.log(this.my_tasks);
	}
	
 }
