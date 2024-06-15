import { Component } from '@angular/core';
import { DUMMY_USERS } from '../app/dummy-user';
// import { NgFor } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [RouterOutlet,Header,User,Tasks,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users =  DUMMY_USERS;
  selectedUserId?:string;

  get selectedUser(){
    return this.users.find(item=>item.id == this.selectedUserId);
  }

  onSelectUser(id : string){
    this.selectedUserId = id;
}

}
