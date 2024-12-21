import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';  // Ensure correct import
import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppComponent } from './app.component';  // Import standalone component

@NgModule({
  declarations: [],  // No need to declare standalone components here
  imports: [
    BrowserModule,
    RouterModule,
    NzLayoutModule,  // Necessary imports
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
  ],
  providers: [],
  // Do not include AppComponent in bootstrap here
})
export class AppModule {}
