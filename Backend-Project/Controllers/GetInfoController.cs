using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend_Project.Controllers
{
    public class Person
    {
        public int age { get; set; }
        public string nom { get; set; }
    }

    public class GetInfoController : ApiController
    {
        // GET: api/GetInfo
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetInfo/5
        public string Get(int id)
        {

            Person p = new Person();
            p.age = id;
            p.nom = "tg";
            return (JsonConvert.SerializeObject(p));

        }

        // POST: api/GetInfo
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetInfo/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetInfo/5
        public void Delete(int id)
        {
        }
    }
}
