import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
//import { HomepageComponent } from './homepage/homepage.component';
import { TrelloService } from './services/trello.service';


import { appRoutes, appComponents } from "./app.routing";
/*const appRoutes = [
    { path: "", redirectTo: "/HomepageComponent", pathMatch: "full"  },
];

const navigatableComponents = [
  HomepageComponent
];*/

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent, ...appComponents],
    providers:[TrelloService],
  bootstrap: [AppComponent]
})
export class AppModule {}
