import { Component, Input } from '@angular/core';
import {Inject} from '@angular/core';
import { Http,Response } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {RestService} from "./service/restService";

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/views/createtask.html',
  providers: [RestService],
  styleUrls: ['app/components/views/styles/login.css']
})
export class CreateTaskComponent  { 
	constructor(private rest:RestService){
		
	}
	
	private createTasks(taskname:any, time:any, payment:any, place:any, category:any, description:any){
		console.log(taskname,time,payment,place,category,description);
		payment = parseInt(payment);
		let newtask = {name: taskname.trim(), "description": description.trim(), "payment": payment, "position": {"latitude":0, "longitude":0}, "starts":time, "category":category.trim()};
		
		/*newtask.name = taskname;
		newtask.description = description;
		newtask.payment = payment;
		newtask.position= {
		   "latitude" : 53.1234567543,
		   "longitude" : 53.1234567543
		};
		newtask.starts = "2016-12-01T15:13:21.000Z";
		newtask.category = category;*/
		
		console.log(newtask);
		let omg = JSON.stringify(newtask);
		console.log(omg);
		omg.replace(/\\n/g, "");
		newtask = JSON.parse(omg);
		console.log(newtask);
		this.postTask(newtask);
	}
	
	private postTask(newtask:any){
		let string = "Bearer ";
		let token = localStorage.getItem('id_token');
		string = string + token;
		console.log(string);
		this.rest.authorizationHeader(string);
		this.rest.newTask(newtask)
		.subscribe((data:any) =>{console.log("response");console.log(data);});
	}
	
 }
