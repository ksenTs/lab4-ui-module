import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ResultDto} from "../dto/result-dto";

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() public results: Array<ResultDto>;

  public columns;

  ngOnChanges(changes: SimpleChanges): void {
    this.results = [
      new ResultDto(5, 6, true),
      new ResultDto(7, 9, false)
    ];
  }

  ngOnInit() {
    this.columns = [
      { field: 'xField', header: 'X' },
      { field: 'yField', header: 'Y' },
      { field: 'isInArea', header: 'Is in area?' }
    ];
  }

}
