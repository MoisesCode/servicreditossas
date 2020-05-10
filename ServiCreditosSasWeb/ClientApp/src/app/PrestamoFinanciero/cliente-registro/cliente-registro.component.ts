import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {
  
  cliente: Cliente;
  searchText: string;
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente();
  }

  registrar(){
    this.clienteService.Post(this.cliente).subscribe(p => {
      if(!p){
        alert('Cliente registrado');
        this.cliente = p;
      }
    });
  }
}
