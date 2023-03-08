import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../desarrollo/getapi.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  Name:string="";
  Name1:string="";
  getdata:any[]=[];
  gender:boolean = false;
  isfill:boolean = false;
  genero:string="";

  constructor(public _services: GetapiService) { 
  }

  ngOnInit() {
  }

  predecir() {
    
    if (this.Name==='') {
      this.Name1 = "Debe Ingresar un Nombre."
    }else  {
      if (this.Name1==='Debe Ingresar un Nombre.')
      this.Name ="";
      if (this.Name !='')
      {
        this.Name1 = 'Su nombre es: '+this.Name;
        this.isfill = true;
      }
    }
    if (this.isfill ===true)
    {
      this._services.getdata<any[]>("",this.Name).subscribe(data => {
        this.getdata = data;
        console.log(this.getdata);

        for (let index = 0; index < this.getdata.length; index++) {
          console.log(this.getdata[index]);
        }
      })
    }
  }
}
