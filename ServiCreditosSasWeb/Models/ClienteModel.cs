using Entity;

namespace ServiCreditosSasWeb.Models
{
    public class ClienteInputModel
    {
        public string Identificacion { get; set; }
        public string Nombre { get; set; }
        public decimal CapitalInicial { get; set; }
        public double Interes { get; set; }
        public int Tiempo { get; set; }

    }

    public class ClienteViewModel : ClienteInputModel
    {
        public decimal TotalAPagar { get; set; }
        public ClienteViewModel(Cliente cliente)
        {
            Identificacion = cliente.Identificacion;
            Nombre = cliente.Nombre;
            CapitalInicial = cliente.CapitalInicial;
            Interes = cliente.Interes;
            Tiempo = cliente.Tiempo;
            TotalAPagar = cliente.TotalAPagar;
        }
    }
}
