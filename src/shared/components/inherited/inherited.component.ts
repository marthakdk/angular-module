import { Component, Input} from '@angular/core';
import {BaseComponent} from 'upoint-core';

@Component({
  selector : 'my-inherited',
  templateUrl: './inherited.component.html'
})
export class InheritedComponent extends BaseComponent {
   @Input() isBase: boolean = true;
}