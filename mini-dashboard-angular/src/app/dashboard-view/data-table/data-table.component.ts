import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DataTableService } from './data-table.service';

export interface TableRowData {
  id: string;
  urn: string;
  created_at: string;
  updated_at: string;
  content: string;
  type: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'type',
    'urn',
    'content',
    'created_at',
    'updated_at',
  ];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.getData();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  getData() {
    this.dataService.getData().subscribe((data) => {
      const mappedData = data.map(
        (item): TableRowData => ({
          id: item.id,
          urn: item.attributes.urn,
          created_at: item.attributes.created_at,
          updated_at: item.attributes.updated_at,
          content: item.attributes.content,
          type: item.attributes.display_properties.type,
        })
      );
      this.dataSource.data = mappedData;
    });
  }
  constructor(private dataService: DataTableService) {}
}
