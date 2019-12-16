import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-house",
  templateUrl: "./house.component.html",
  styleUrls: ["./house.component.css"]
})
export class HouseComponent implements OnInit {
  type: string;
  roomNumber: number;
  status: string;
  service: Service;
  settlementRules: string[];

  constructor() {}

  ngOnInit() {
    this.type = "Standart";
    this.roomNumber = 901;
    this.status = "free";
    this.service = {
      serviceType: "Cleaning room",
      price: "50 $/day",
      status: "free"
    };
    this.settlementRules=["Passport ", "Identify code ", "Payment "]
  }

  serviceSelect()
  {
    
  }
}

interface Service {
  serviceType: string;
  price: string;
  status: string;
}
