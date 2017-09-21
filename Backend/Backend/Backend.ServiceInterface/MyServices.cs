using ServiceStack;
using Shared;

namespace Backend.ServiceInterface
{
    public class MyServices : Service
    {
        public  HelloResponse Any(HelloRequest request)
        {            
            return new HelloResponse { Result = string.Format("Message recieved from {0}", request.Name) };
        }
       
    }
}