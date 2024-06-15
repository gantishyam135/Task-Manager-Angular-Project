import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


import { Tasks } from "./Tasks";
import { Task } from "../Task/Task";
import { NewTask } from "../NewTask/NewTask";
import { SharedModule } from "../app/shared/shared.Module";


@NgModule({
    declarations:[Tasks,Task,NewTask],
    exports:[Tasks],
    imports:[CommonModule,FormsModule,SharedModule]
})
export class TaskModule{}