import {Component, Input} from '@angular/core';

@Component({
    selector:'app-tasks',
    imports:[],
    standalone:true,
    templateUrl:'./Tasks.html',
    styleUrl:'./Tasks.scss'
})

export class Tasks{
@Input({required:true}) name : any;
}