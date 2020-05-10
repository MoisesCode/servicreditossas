using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Logica;
using Datos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ServiCreditosSasWeb.Models;

namespace ServiCreditosSasWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly ClienteService _clienteService;
        
        public ClienteController(ClienteContext context)
        {
            _clienteService = new ClienteService(context);
        }

        [HttpPost]
        public ActionResult<ClienteViewModel> post(ClienteInputModel clienteInput){
            Cliente cliente = MapearCliente(clienteInput);
            var response = _clienteService.Guardar(cliente);
            if(response.Error){
                return BadRequest(response.Mensaje);
            }
            return Ok(response.cliente);
        }
        private Cliente MapearCliente(ClienteInputModel clienteInput)
        {
            var cliente = new Cliente
            {
                Identificacion = clienteInput.Identificacion,
                Nombre = clienteInput.Nombre,
                CapitalInicial = clienteInput.CapitalInicial,
                Interes = clienteInput.Interes,
                Tiempo = clienteInput.Tiempo
            };
            return cliente;
        }

        [HttpGet]
        public IEnumerable<ClienteViewModel> Gets(){
            var clientes = _clienteService.Consultar().Select(p=> new ClienteViewModel(p));
            return clientes;
        }
    }
}
