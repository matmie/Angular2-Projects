import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls : [ './header.component.css' ]
})
export class HeaderComponent {
	public header:{title:string, 
		              buttons: {signin:string, signup:string}
		          } = {title:'Evaluate YourSelf', buttons : { signin : 'Zaloguj', signup : 'Rejestracja'}} ; 
}