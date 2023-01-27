import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "./components/test/test.component";
import { TestTwoComponent } from "./components/test-two/test-two.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) // Lazy loading
  },
  {
    path: 'test',
    children: [
      {
        path: '',
        component: TestComponent,
      },
      {
        path: 'test-two/:id',
        component: TestTwoComponent,
      },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
