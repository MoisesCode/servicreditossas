import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Cliente } from '../PrestamoFinanciero/models/cliente';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ){ this.baseUrl = baseUrl }
  
  Post(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl + 'api/Cliente', cliente)
    .pipe(
      tap(_ => this.handleErrorService.log('Datos enviados')),
      catchError(this.handleErrorService.handleError<Cliente>('Registrar cliente', null))
    );
  }

  Get(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl + 'api/Cliente')
      .pipe(
        tap(_ => this.handleErrorService.log('Datos consultados')),
        catchError(this.handleErrorService.handleError<Cliente[]>('Consulta cliente', null))
      );
  }
}
