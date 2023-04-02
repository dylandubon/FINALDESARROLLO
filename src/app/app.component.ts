import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PixelService } from './services/Pixeles.service';
import { categoriasservices } from './categorias/categorias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(public pixelService: PixelService) {
     
  }



  ngOnInit(): void {

  
  }
  
  ngAfterViewInit(): void {



  }


}
