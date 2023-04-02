import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categoriasservices } from './categorias.service';
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  artista: any = {};
  topTracks: any = [];
  imagenURL : any = '';
  urlProfile : any = '';
  url : any = 'https://p.scdn.co/mp3-preview/a24ea47d20ac1f711faa0785bcc652db71a99e02?cid=af45800cf23549a7a9b8e31c855ca2d8';

  loadingArtists: boolean = false;
  constructor(private router: ActivatedRoute, private categoria : categoriasservices,
    private sanitizer: DomSanitizer) {
      
    this.loadingArtists = true;
    this.router.params.subscribe( params => {
      this.getcategoria(params["id"])
    })
  }
  ngOnInit(): void {
  }

  getcategoria(id: string){
    this.categoria.getToken().subscribe((data:any) => {
      this.categoria.getcategorias(id, data.access_token).subscribe((artista : any)=>{
        this.artista = artista;
        //console.log(this.artista);
        this.imagenURL = this.artista.images[1];
        this.loadingArtists = false;
        this.urlProfile =this.artista.external_urls.spotify; //this.safePipe.transform(this.artista.external_urls.spotify);
        
        this.getcategoria(id);
      },(errorServicio: any) => {
        this.loadingArtists = false;
        console.log(errorServicio);
      }
      )
    });
   
  }
  
  redirect() {
    document.location.href = this.urlProfile;

  }
  redirectSong(url: any) {
    document.location.href = url.spotify;

  }
}
