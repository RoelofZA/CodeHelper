import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverComponent } from './cover/cover.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { SnippetsComponent } from './snippets/snippets.component';

const routes: Routes = [
  { path: '', component: CoverComponent, pathMatch: 'full' },
  { path: 'cover', component: CoverComponent },
  { path: 'snippets', component: SnippetsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
