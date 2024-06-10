import {Component, Input, Output, EventEmitter} from '@angular/core';
import { TaskData } from './Task.model';
import { CardComponent } from '../app/shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
    selector:'app-task',
    imports:[CardComponent,DatePipe],
    standalone:true,
    templateUrl:'./Task.html',
    styleUrl:'./Task.scss'
})


export class Task{
@Input() taskData!: TaskData;
@Output() complete = new EventEmitter<string>;

onCompleteTask(){
    this.complete.emit(this.taskData.id);
}

}