import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from '../Header/Header';
import {User} from '../User/User';
import { DUMMY_USERS } from '../app/dummy-user';
import { Tasks } from '../Tasks/Tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Header,User,Tasks],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users =  DUMMY_USERS;
  selectedUserId='u1';

  get selectedUser(){
    return this.users.find(item=>item.id == this.selectedUserId)!;
  }

  onSelectUser(id : string){
    this.selectedUserId = id;
}
}
