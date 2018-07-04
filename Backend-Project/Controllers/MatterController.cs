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
        //Get modules list from classe name (ex : /Matter/B3) : Quelques bugs sont présents
       // [HttpGet, ActionName("get")]
        public IHttpActionResult GetModuleFromClassName(String classeName)
        {
            IdBoardDb iDBoard = new IdBoardDb();

            int idClasse = (from Classes in iDBoard.Classes where Classes.Name == classeName select Classes.idClass).FirstOrDefault();

            var MatterList = (from Matters in iDBoard.Matters where Matters.idClass == idClasse select new
            {
                Matters.Courses,
                Matters.Reference,
                Matters.DescriptionDefaultValue,
                Matters.MarksNumber,
                Matters.ECTSCredits
            }).ToList();
            
            return Ok(JsonConvert.SerializeObject(MatterList, Formatting.Indented, new JsonSerializerSettings()
            { ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore }
             ));
        }

        //Edit credits ECTS from a module reference
        [HttpPost]
        public IHttpActionResult EditECTS(String reference, double credits)
        {
            IdBoardDb iDBoard = new IdBoardDb();

            var updateRow = (from Matters in iDBoard.Matters where Matters.Reference == reference select Matters).FirstOrDefault();

            updateRow.ECTSCredits = credits;

            iDBoard.SaveChanges();
            
            return Ok();
        }

        //Create a matter for a classe 
        [HttpPost]
        public IHttpActionResult AddMatter(String _reference, String _description, int _marksNumber, double _credits, String _classeName)
        {
            IdBoardDb iDBoard = new IdBoardDb();

            int _idClasse = (from Classes in iDBoard.Classes where Classes.Name == _classeName select Classes.idClass).FirstOrDefault();

            Matters newMatterQuery = new Matters
            {
                idClass = _idClasse,
                Reference = _reference,
                DescriptionDefaultValue = _description,
                MarksNumber = _marksNumber,
                ECTSCredits = _credits
            };

            iDBoard.Matters.Add(newMatterQuery);

            iDBoard.SaveChanges();

            return Ok();
        }

    }
}
