import {Component} from '@angular/core';
import {Client} from './client';



@Component({
	selector:'my-client',
	templateUrl:'./client.component.html'
})

export class ClientComponent {

	client: Client = {
		id: '1',
		name: 'Greg',
		address: null
	};

}