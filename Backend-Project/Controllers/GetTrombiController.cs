using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend_Project.Controllers
{

    public class GetTrombiController : ApiController
    {
        public IHttpActionResult Get()
        {
            IDBoardDb idBoard = new IDBoardDb();

            var listStudent = from eleves in idBoard.BusinessEntities select eleves.Name;
            return Ok(JsonConvert.SerializeObject(listStudent));
        }
    }
}
