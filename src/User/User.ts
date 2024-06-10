import  {Component, Input, Output, EventEmitter} from '@angular/core';
import { UserData } from './User.model';
import { CardComponent } from '../app/shared/card/card.component';

@Component({
    selector:'app-user',
    standalone:true,
    imports:[CardComponent],
    templateUrl:'./User.html',
    styleUrl:'./User.scss',
})

export class User{
 @Input({required:true}) user! : UserData;
 @Input({required:true}) selected! : boolean;
 @Output() select = new EventEmitter();

get imagePath() {
    return 'assets/Users/' + this.user.avatar;
}
onSelectUser(){
    this.select.emit(this.user.id);
}
}