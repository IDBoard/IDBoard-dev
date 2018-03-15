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
        public IHttpActionResult Get()
        {
            IdBoardDb iDBoard = new IdBoardDb();

            var InternshipOffersList = (from t1 in iDBoard.InternshipOffers
                                        join t2 in iDBoard.TypesInternships
                                        on t1.idTypeInternship equals t2.idTypeInternship
                                        select new
                                        {
                                            t1.Reference,
                                            t1.Title,
                                            t1.MissionSummary,
                                            t1.CompanyName,
                                            t1.Duration,
                                            t1.DateStart,
                                            t1.DateEnd,
                                            t1.Contact,
                                            t1.ContactPhone,
                                            t1.ContactMail,
                                            t1.Address1,
                                            t1.Address2,
                                            t1.PostalCode,
                                            t1.City,
                                            t1.Country,
                                            t2.TypeDefaultValue,
                                        }).ToList();

            return Ok(JsonConvert.SerializeObject(InternshipOffersList, Formatting.Indented, new JsonSerializerSettings()
            { ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore }
            ));
        }
    }
}
