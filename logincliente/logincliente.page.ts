import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincliente',
  templateUrl: './logincliente.page.html',
  styleUrls: ['./logincliente.page.scss'],
})
export class LoginclientePage implements OnInit {


/* form: FormGroup; */

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

/*   email: any;
  senha: any; */

  constructor(private router: Router, private http:HttpClient, ) {}



  ngOnInit() {
  }

  async login(form: any){
    /* console.log(form.value); */


    /* Utilizando a ferramenta httpclient para cadastro */
    const usuario = { email: form.value.email, senha: form.value.senha};

    this.http.post('http://localhost:3000/login', usuario , this.httpOptions).subscribe((data:any) => {
      console.log(data);
      if (data.length > 0){
        this.router.navigate(['/home']);
      } else {
        console.log('invalido');
      }
    });



  }


  recupere(){
    this.router.navigate(['/recupere']);
  }
}


