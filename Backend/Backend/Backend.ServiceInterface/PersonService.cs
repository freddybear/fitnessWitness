using Backend.ServiceModel;
using ServiceStack;


namespace Backend.ServiceInterface
{
    public class PersonService : Service
    {        
        public Person Get(GetPerson request)
        {
            Person p = new Person();

            if(request.Name == "Arne")
            {
                p.email = "Arne@gmail.com";
                p.firstName = "Arne";
                p.surName = "Arnesen";
                
            }else if(request.Name == "Bob")
            {
                p.email = "Bob@gmail.com";
                p.firstName = "Bob";
                p.surName = "Bobsen";

            }
            else if(request.Name == "Tor")
            {
                p.email = "Tor@gmail.com";
                p.firstName = "Tor";
                p.surName = "Torsen";

            }
            else
            {
                //Log that it failed
            }
            return p;
        }

    }
}