import {Component, EventEmitter, Output, Input, inject} from '@angular/core';
import { type NewTaskData } from '../Task/Task.model';
import { TaskService } from '../Tasks/Tasks-service';

@Component({
    selector:'app-new-task',
    standalone:false,
    templateUrl:'./NewTask.html',
    styleUrl:'./NewTask.scss',
})

export class NewTask{
@Input({required:true}) userId!:string;
@Output() close = new EventEmitter<void>();
@Output() add = new EventEmitter<NewTaskData>();
private taskservice = inject(TaskService);
enteredTitle = '';
enteredSummary='';
enteredDate= '';
    
    onSubmit(){
        this.taskservice.addTaskData(
        {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date:this.enteredDate
        }, 
        this.userId
        );
        this.close.emit();
    }

    onCancel(){
        this.close.emit()
    }

    

}