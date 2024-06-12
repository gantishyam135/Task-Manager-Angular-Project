import {Component, Input, inject} from '@angular/core';
import { TaskData } from './Task.model';
import { CardComponent } from '../app/shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../Tasks/Tasks-service';

@Component({
    selector:'app-task',
    imports:[CardComponent,DatePipe],
    standalone:true,
    templateUrl:'./Task.html',
    styleUrl:'./Task.scss'
})


export class Task{
@Input() taskData!: TaskData;
private taskService = inject(TaskService);



onCompleteTask(){
    this.taskService.removeTask(this.taskData.id);
}




}