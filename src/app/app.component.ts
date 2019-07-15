import { Component, OnInit } from '@angular/core';
import { CapcodataService } from './capcodata.service';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  capcoData: any;
  // pager object
  pagination: any = {};
  // paged items
  paginationData: any[];
  pageSize = 10;
  dataPerPage = [10, 25, 50, 100, 200];

  constructor(private capcodataService: CapcodataService, private paginationService: PaginationService) { }
  title = 'Capco | Angular Developer Assessment';

  setPage(page: number) {
    // get pager object from service
    this.pagination = this.paginationService.getPager(this.capcoData.length, page, this.pageSize);
    // get current page of items
    this.paginationData = this.capcoData.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }

  setDataPerPage(pageSize) {
    this.pageSize = +pageSize;
    this.setPage(1);
  }

  ngOnInit() {
    this.capcodataService.GetData()
    .subscribe(data => {
      this.capcoData = data;
      // log response to console.
      console.log(data);
      this.setPage(1);
    });
  }

  submit(user) {
    const formData = new FormData();
    formData.append('userId', user.id);
    formData.append('userStatus', user.status);
    this.capcodataService.updateStatus(formData).subscribe(data => {
      console.log(data);
    });
  }
}
