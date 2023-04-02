import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PixelService } from '../services/Pixeles.service';


@Component({
  selector: 'app-artists',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']

})
export class ShowComponent implements OnInit {

    showPerson: any;
    constructor(private router: ActivatedRoute, private pixelService: PixelService,
        private routerd: Router) {
        this.router.params.subscribe( params => {
            this.getShow(params["id"])
          })
    }


    getShow(id: number) {
        console.log('entrooo')
        this.pixelService.getElementById(id).then((data:any) => {
            this.showPerson = data;
            console.log(data)
        })
    }
    ngOnInit(): void {
        
    }

    redirect() {
        this.routerd.navigate(['home'])
    }
}

