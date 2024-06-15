import { Injectable } from "@angular/core";
import { NewTaskData } from "../Task/Task.model"


@Injectable({providedIn: 'root'})
export class TaskService{
    tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ]
    add: any;
      getUserTasks(id:string){
        return   this.tasks.filter(task=> task.userId == id)
      }

      constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
          this.tasks = JSON.parse(tasks);
        }
      }

      addTaskData(taskData:NewTaskData, id:string){
        this.tasks.unshift({
            id:new Date().getTime().toString(),
            userId:id,
            title:taskData.title,
            summary:taskData.summary,
            dueDate:taskData.date
        });
        this.saveTasks();
      }

      removeTask(id:string){
        this.tasks = this.tasks.filter(task=> task.id !== id);
        this.saveTasks();
      }

      private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }
}