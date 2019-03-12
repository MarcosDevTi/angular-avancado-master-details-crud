import { Component, OnInit, Input } from '@angular/core';

interface BradCrumbItem{
  text: string
  link?: string
}
@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  @Input() items: Array<BradCrumbItem> = []
  constructor() { }

  ngOnInit() {
  }

  isTheLastItem(item: BradCrumbItem): boolean{
    const index = this.items.indexOf(item)
    return index + 1 == this.items.length
  }

}
