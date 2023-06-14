import { CdkDrag } from '@angular/cdk/drag-drop';
import
  {
    Directive,
    OnDestroy,
    OnInit,
  } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[cdkDrag]',
})
export class DraggingDirective implements OnInit, OnDestroy
{
  private unsubscribe$: Subject<void> = new Subject();
  constructor(private cdkDrag: CdkDrag) { }

  public ngOnInit(): void
  {
    this.cdkDrag.started.pipe(takeUntil(this.unsubscribe$)).subscribe(() =>
    {
      document.body.classList.add('dragging');
    });

    this.cdkDrag.ended.pipe(takeUntil(this.unsubscribe$)).subscribe(() =>
    {
      document.body.classList.remove('dragging');
    });
  }

  public ngOnDestroy(): void
  {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
