import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10, maxPages: number = 10) {
    // To calculate total no. of pages
    const totalPages = Math.ceil(totalItems / pageSize);

    // To make sure current page is assigned properly
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number;
    let endPage: number;
    if (totalPages <= maxPages) {
      // Total pages less than max so display all pages
      startPage = 1;
      endPage = totalPages;
    } else {
      // Total pages more than max, calculate start and end pages
      const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // Current page equals start page
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        // Current page at the end
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        // Current page between start and the end
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    // Calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // To create an array of pages to ng-repeat in the pager control
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // Return object with pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }
}
