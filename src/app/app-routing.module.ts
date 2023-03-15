import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './views/main-page/main-page.component';
import { CompteComponent } from './views/compte/compte.component';
import { TrocComponent } from './views/troc/troc.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
    {path: 'compte', component: CompteComponent},
  {path: 'troc', component: TrocComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'accueil', component: MainPageComponent},
  {path:'', redirectTo:'/accueil', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
