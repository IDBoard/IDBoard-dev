using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend_Project.Controllers
{
    public class PersonController : ApiController
    {
        // GET: api/Person : Renvoie la liste des personnes
        public IHttpActionResult GetPerson()
        {
            IdBoardDb iDBoard = new IdBoardDb();

            //idBusinnesEntity 2 = Personne homme | idBusinnesEntity 3 = Personne femme | idBusinnesEntity 4 = Personne Morale
            var PersonList = (from person in iDBoard.BusinessEntities
                              where new[] { 2, 3, 4 }.Any(s => s == person.idTypeBusinessEntity)
                              select new
                              {
                                  person.idBusinessEntity,
                                  person.FirstName,
                                  person.Name
                              }).ToList();

            return Ok(JsonConvert.SerializeObject(PersonList, Formatting.Indented, new JsonSerializerSettings()
            { ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore }
            ));
        }

        // GET: api/Person/id : Renvoie les détails d'une personnes séléctionnée par id
        public IHttpActionResult GetPerson(int id)
        {
            IdBoardDb iDBoard = new IdBoardDb();

            var PersonDetails = (from person in iDBoard.BusinessEntities
                                 where person.idBusinessEntity == id
                                 join typebusinnesentity in iDBoard.TypesBusinessEntities
                                 on person.idTypeBusinessEntity equals typebusinnesentity.idTypeBusinessEntity
                                 join fichecontact in iDBoard.ContactDetails
                                 on person.idBusinessEntity equals fichecontact.idBusinessEntity where fichecontact.DateEnd == null
                                 // on prend la fiche contact que si date end == null pour prendre la plus recente
                                 select new
                                 {
                                     person.idBusinessEntity,
                                     // person.idTypeBusinessEntity, => On selectionne le Type (en string) dans la table TypeBusinessEntity
                                     // plutot que renvoyer un id
                                     typebusinnesentity.TypeDefaultValue,
                                     person.idSystemLevel,
                                     person.IDBoard,
                                     person.FirstName,
                                     person.Name,
                                     person.SurName,
                                     person.PhotoPath,
                                     person.DateOfBirth,
                                     person.PlaceOfBirth,
                                     person.Nationality,
                                     person.CountryOfBirth,
                                     person.Comments,
                                     person.CardTokenID,
                                     fichecontact.Address1,
                                     fichecontact.Address2,
                                     fichecontact.PostalCode,
                                     fichecontact.City,
                                     fichecontact.Country
                                 }).ToList();

            return Ok(JsonConvert.SerializeObject(PersonDetails));
        }


    }
}
