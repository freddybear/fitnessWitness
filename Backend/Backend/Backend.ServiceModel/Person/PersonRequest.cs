using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.ServiceModel
{
    [Route("/getPersonByName/{Name}")]
    public class GetPerson : IReturn<Person>
    {
        public string Name { get; set; }
    }
}
