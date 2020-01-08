import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details: any;
  Data: any;
  columnDefs = [
    { headerName: 'Title', field: 'title' },
    { headerName: 'Url', field: 'url' },
    { headerName: 'Created_at', field: 'created_at' },
    { headerName: 'Author', field: 'author' }
  ];

  constructor(private service: HomeService) {
    this.fetch();
  }
  // To poll Api for every 10 seconds
  ngOnInit() {
    this.fetch();
    setInterval(() => this.fetch(), 10000)
  }
  // To get Data from Api
  fetch() {
    this.service.getData().subscribe(response => {
      console.log(response);
      this.details = response['hits'];
    })
  }

  onRowClicked(event) {
    this.Data = event.node.data
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }
}
