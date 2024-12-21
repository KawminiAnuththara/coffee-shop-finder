import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'coffee', loadChildren: () => import('./coffee/coffee.module').then(m => m.CoffeeModule) }, { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }]; // Add this line if it's missing

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Ensure this is present
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
