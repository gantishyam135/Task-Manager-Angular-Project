import {Component, Input, inject} from '@angular/core';

import { TaskService } from '../Tasks/Tasks-service';
import { TaskData } from './Task.model';

@Component({
    selector:'app-task',
    standalone:false,
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