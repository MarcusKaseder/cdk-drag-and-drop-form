import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewControlsComponent } from './new-controls/new-controls.component';
import { FormComponent } from './form/form.component';
import { DraggingDirective } from './dragging.directive';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormColumnsComponent } from './form-columns/form-columns.component';
import { CastPipe } from './cast.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormControlsModule } from './form-controls/form-controls.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NewControlsComponent,
    FormComponent,
    DraggingDirective,
    FormContainerComponent,
    FormColumnsComponent,
    CastPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatIconModule,
    DragDropModule,
    FormControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
