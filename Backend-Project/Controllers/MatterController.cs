using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend_Project.Controllers
{
    public class MatterController : ApiController
    {
        //Get modules list from classe name (ex : /Matter/B3)
        public IHttpActionResult Get(String ClasseName)
        {
            IDBoardDb iDBoard = new IDBoardDb();

            int idClasse = (from Classes in iDBoard.Classes where Classes.Name == ClasseName select Classes.idClass).FirstOrDefault(); ;

            var MatterList = (from Matters in iDBoard.Matters where Matters.idClass == idClasse select Matters).ToList();

            return Ok(JsonConvert.SerializeObject(MatterList, Formatting.Indented, new JsonSerializerSettings()
            { ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore }
            ));
        }

        //Edit credits ECTS from module reference
        [HttpPost]
        public IHttpActionResult EditECTS(String reference, double credits)
        {
            IDBoardDb iDBoard = new IDBoardDb();

            var updateRow = (from Matters in iDBoard.Matters where Matters.Reference == reference select Matters).FirstOrDefault();

            updateRow.ECTSCredits = credits;

            iDBoard.SaveChanges();

            return Ok();
        }

    }
}
