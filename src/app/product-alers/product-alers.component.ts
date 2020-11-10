import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-product-alers",
  templateUrl: "./product-alers.component.html",
  styleUrls: ["./product-alers.component.css"]
})
export class ProductAlersComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
