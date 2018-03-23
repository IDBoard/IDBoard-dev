using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend_Project.Controllers
{
    public class EventController : ApiController
    {
        public class Event
        {
            public int IdEvent { get; set; }
            public int IdBusinessEntity { get; set; }
            public int IdTypeEvent { get; set; }
            public int IdSystemLevel { get; set; }
            public int BBCode { get; set; }
            public DateTime Date { get; set; }
        }

        public IHttpActionResult Get(int id)
        {
            return Ok();
        }
    }
}
