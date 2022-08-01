import {
  AfterViewInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit, AfterViewInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.tabs.length);
    if (this.tabs.length > 0) {
      const selectedTab = this.tabs.get(0);
      if (selectedTab) {
        this.selectTab(selectedTab);
      }
    } else {
      throw new Error(
        'It nhat mot tab <app=tabs><app-tab></app-tab></app-tabs>'
      );
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((item) => {
      item.active = item === tab;
    });
  }
}
