import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { Header } from "../Header/Header";
import { User } from "../User/User";
import { SharedModule } from "./shared/shared.Module";
import { TaskModule } from "../Tasks/tasks.module";


@NgModule({
    declarations:[AppComponent,Header,User],
    bootstrap:[AppComponent],
    imports:[BrowserModule,SharedModule,TaskModule],  // For Standalone components
})


export class AppModule{}