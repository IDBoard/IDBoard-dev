using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend_Project.Controllers
{
    public class SalutationController : ApiController
    {
        public IHttpActionResult Get()
        {
            IdBoardDb iDBoard = new IdBoardDb();


            var list = from salutation in iDBoard.Salutations select salutation.SalutationDefaultValue;
            return Ok(JsonConvert.SerializeObject(list));
        }
    }
}
