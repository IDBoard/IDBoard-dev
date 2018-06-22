using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend_Project.Controllers
{
    public class PersonController : ApiController
    {
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
                                 on person.idBusinessEntity equals fichecontact.idBusinessEntity
                                 where fichecontact.DateEnd == null
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

        // POST: AddPerson => _type == (Homme || Femme || Morale)
        [HttpPost]
        public IHttpActionResult UpdatePerson(int _idBusinessEntity, String _type, int _idSystemLevel, int _IDBoard, String _firstName, String _name, String _surName, String _photoPath, 
            String _dateOfBirth, String _placeOfBirth, String _nationality, String _contryOfBirth, String _comment, String _adress1, String _adresse2, int _postalCode,
            String _city, String _country)
        {
            IdBoardDb iDBoard = new IdBoardDb();

            var PersonDetails = (from person in iDBoard.BusinessEntities
                                 where person.idBusinessEntity == _idBusinessEntity
                                 join typebusinnesentity in iDBoard.TypesBusinessEntities
                                 on person.idTypeBusinessEntity equals typebusinnesentity.idTypeBusinessEntity
                                 join fichecontact in iDBoard.ContactDetails
                                 on person.idBusinessEntity equals fichecontact.idBusinessEntity
                                 where fichecontact.DateEnd == null
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
            
            iDBoard.SaveChanges();

            return Ok();
        }

        [HttpPost, ActionName("InsertPerson")]
        public IHttpActionResult InsertPerson(int _idSalutation, int _idTypeBusinessEntity, String _type, int _idSystemLevel, String _IDBoard, String _firstName, 
            String _name, String _surName, String _photoPath, String _dateOfBirth, String _placeOfBirth, String _nationality, String _contryOfBirth, String _comment, String _adresse1,
            String _adresse2, String _postalCode, String _city, String _country)
        {
            IdBoardDb iDBoard = new IdBoardDb();

            BusinessEntities newBusinessEntitie = new BusinessEntities
            {
                idBusinessEntity = 0,
                idSalutation = _idSalutation,
                idTypeBusinessEntity = _idTypeBusinessEntity,
                idSystemLevel = _idSystemLevel,
                IDBoard = _IDBoard,
                Name = _name,
                FirstName = _firstName,
                SurName = _surName,
                PhotoPath = _photoPath,
                DateOfBirth = DateTime.ParseExact(_dateOfBirth, "yyyy-MM-dd", System.Globalization.CultureInfo.InvariantCulture),
                PlaceOfBirth = _placeOfBirth,
                Nationality = _nationality,
                CountryOfBirth = _contryOfBirth,
                Comments = _comment,
                CardTokenID = "0"
            };

            iDBoard.BusinessEntities.Add(newBusinessEntitie);

            iDBoard.SaveChanges();

            ContactDetails newContactDetail = new ContactDetails
            {
                idContactDetails = 0,
                idBusinessEntity = newBusinessEntitie.idBusinessEntity,
                Address1 = _adresse1,
                Address2 = _adresse2,
                PostalCode = _postalCode,
                City = _city,
                Country = _country,
                DateStart = DateTime.Now,
                DateEnd = null
            };

            iDBoard.ContactDetails.Add(newContactDetail);

            iDBoard.SaveChanges();

            return Ok();
        }
    }
}
