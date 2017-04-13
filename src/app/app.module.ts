import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientComponent } from './components/client.component';
import { WorkSessionComponent } from './components/work-session.component';



const appRoutes: Routes = [
  { 
    path: 'client', 
    component: ClientComponent
  },
  { 
    path: 'workSession',
    component: WorkSessionComponent
  },
  { 
    path: '',
    redirectTo: '/workSession',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    WorkSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
