import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-table',
  templateUrl: './serie-table.component.html',
  styleUrls: ['./serie-table.component.css']
})
export class SerieTableComponent implements OnInit {

  selected: Boolean = false;
  selectedSerie!: Serie;
  series: Array<Serie> = [];
    constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    })
  }

  ngOnInit() {
    this.getSeries();
  }

  getAvgSeasons(): number {
    let totalSeasons: number = 0;
    let totalSeries: number = 0;
    this.series.forEach((serie) =>
    {
    totalSeasons = totalSeasons + serie.seasons;
    totalSeries = totalSeries + 1;
    });
    let avgSeasons: number = totalSeasons/totalSeries;
    return avgSeasons;
  }

  onSelected(serie: Serie): void {
    this.selected = true;
    this.selectedSerie = serie;
  }

}
