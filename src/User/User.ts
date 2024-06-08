import  {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'app-user',
    standalone:true,
    templateUrl:'./User.html',
    styleUrl:'./User.scss',
})

export class User{
 @Input({required:true}) id! : String;
 @Input({required:true}) avatar! : String;
 @Input({required:true}) name! : String;
 @Output() select = new EventEmitter();

get imagePath() {
    return 'assets/Users/' + this.avatar;
}
onSelectUser(){
    this.select.emit(this.id);
}
}