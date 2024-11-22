import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuFooterService {
  hideMenu = new BehaviorSubject<boolean>(false);
  hideFooter = new BehaviorSubject<boolean>(false);

  setMenuVisibility(visible: boolean): void {
    this.hideMenu.next(!visible);
  }

  setFooterVisibility(visible: boolean): void {
    this.hideFooter.next(!visible);
  }
}
