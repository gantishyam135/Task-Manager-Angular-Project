import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Task } from '../Task/Task';
//import { dummyTasks } from '../app/dummy-tasks';
import { selectedTaskData } from './Tasks.model';
import { NewTask } from '../NewTask/NewTask';
import { type NewTaskData } from '../Task/Task.model';
import { TaskService } from './Tasks-service';

@Component({
    selector:'app-tasks',
    imports:[Task,NewTask],
    standalone:true,
    templateUrl:'./Tasks.html',
    styleUrl:'./Tasks.scss'
})

export class Tasks{
//tasks = dummyTasks;
@Input() selectedUser! :selectedTaskData;
@Output() complete = new EventEmitter;
@Output() add = new EventEmitter<NewTaskData>();
//private taskService = new TaskService();
isAddingTask= false;

constructor(private taskService : TaskService){}



onSelectNewTask(){
    this.isAddingTask = true;
}

onCloseAddTask(){
    this.isAddingTask = false;
}

onAddTask(taskData : NewTaskData){
    this.taskService.addTaskData(taskData,this.selectedUser.id);
    this.isAddingTask = false;
 }


get selectedUserTasks(){
    return this.taskService.getUserTasks(this.selectedUser.id);
  }


}