import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SeeFoodComponent } from './seefood/seefood.component';
import { SeeFoodDetailComponent } from './seefood/seefod-detail.component';

const routes: Routes = [
    { path: "", redirectTo: "/seefood", pathMatch: "full" },
    { path: "seefood", component: SeeFoodComponent },
    { path: "seefood-detail", component: SeeFoodDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
