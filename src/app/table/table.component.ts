import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PixelService } from '../services/Pixeles.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit, AfterViewInit {
    title = 'proyecto';
    displayedColumns: string[] = ['id', 'photographer', 'src', 'ACCIONES'];
    dataSource = new MatTableDataSource<any>();
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
  

    constructor(public pixelService: PixelService, public router: Router) {
     
    }
  
  
    ngOnInit(): void {
        this.pixelService.getExamples(1).then( (data : any) => {
          this.dataSource.data = data.photos;
        });
      }
      
    ngAfterViewInit(): void {
    
        this.dataSource.paginator = this.paginator;
    
    }

    redirect(id: any) {
        console.log(id);
        this.router.navigate(['show/' + id]);

    }
}

