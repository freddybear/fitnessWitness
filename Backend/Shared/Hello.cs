﻿using ServiceStack;

namespace Shared
{
    [Route("/hello/{Name}")]
    public class HelloRequest : IReturn<HelloResponse>
    {
        public string Name { get; set; }
    }
    
    public class HelloResponse
    {
        public string Result { get; set; }
    }
}