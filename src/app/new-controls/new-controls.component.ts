import { CdkDragExit, CdkDragMove, CdkDragRelease, CdkDropList } from '@angular/cdk/drag-drop';
import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IFormControl } from '../form-controls/form-control.interface';
import { FormControlsService } from '../form-controls/form-controls.service';
import { IDragItem } from '../models/drag-item.interface';
import { DragDropService } from '../services/drag-drop.service';

@Component({
  selector: 'app-new-controls',
  templateUrl: './new-controls.component.html',
  styleUrls: ['./new-controls.component.scss'],
})
export class NewControlsComponent implements OnInit, AfterViewInit {
  @ViewChild(CdkDropList) dropList?: CdkDropList;
  public items: IDragItem[] = [];
  public get connectedLists()
  {
    return this.dragDropService.dropLists;
  }
  constructor(private formControlsService: FormControlsService, public dragDropService: DragDropService) {}

  ngOnInit(): void {
    for (const key in this.formControlsService.controlTypes) {
      const element = this.formControlsService.controlTypes[key];

      this.items.push(new element());
    }
  }

  ngAfterViewInit(): void
  {
    if(this.dropList)
    {
      this.dragDropService.register(this.dropList);
    }
  }

  disallowDropPredicate() {
    return false;
  }

  createItemClone(event: CdkDragExit<any>) {
    this.items.splice(
      event.container._dropListRef.getItemIndex(event.item._dragRef) + 1,
      0,
      {
        ...event.item.data,
        isClone: true,
      }
    );
  }

  dragMoved(event: CdkDragMove<IFormControl>) {
    this.dragDropService.dragMoved(event);
  }

  dragReleased(event: CdkDragRelease) {
    this.dragDropService.dragReleased(event);

    this.removeItemClone();
  }

  removeItemClone() {
    this.items = this.items.filter((i) => !i.isClone);
  }
}
