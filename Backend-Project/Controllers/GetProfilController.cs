using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend_Project.Controllers
{
    public class GetProfilController : ApiController
    {
        public class Adresse
        {
            public string Addresse1 { get; set; }
            public string Addresse2 { get; set; }
            public string Postal { get; set; }
            public string City { get; set; }
            public string Country { get; set; }

        }
        public class Student
        {
            public Adresse adresseInfo { get; set; }
            public string phtoPath { get; set; }
            public List<string> messagesTab { get; set; } // A voir si on fait une classe
            public List<string> eventsTab { get; set; } // pareil
            public string phoneNumber { get; set; }
            public string adresseMail { get; set; }
        }

        // [HttpPost]
        //public IHttpActionResult Modif photo(int id , File photo)
        //{

        // Return liste des emails
        //}

        // [HttpPost]
        //public IHttpActionResult SuprMail (int id, string email)
        // {

        // suppr email si plusieurs mails en db
        //}



        //[HttpPost]
        //public IHttpActionResult GetMailList(int id)
        //{

        // Return liste des emails
        //}

        //[HttpPost]
        //public IHttpActionResult GetMailList(int id)
        //{

        // Return liste des emails
        //}

        //[HttpPost]
        //public IHttpActionResult modifMail(int id, int mailOld, int mailNew)
        //{

        // Return liste des emmodif email en db
        //}

        //public IHttpActionResult AcceptModifPhone(int id, string num)
        // {

        //modifer num (update en base de donnée    
        //}


        // [HttpPost]
        //public IHttpActionResult SuprPhone(int id, string num)
        //{

        //supression d'un numéro si y'en a plusieurs
        //}
        [HttpPost]
        public IHttpActionResult ModifAddComplete(string address1, string address2,  string cp, string city, string country, int id)
        {
            IDBoardDb idBoard = new IDBoardDb(); //Context

            var Address1 = (from add1 in idBoard.ContactDetails where add1.idBusinessEntity == id select add1).FirstOrDefault();

            Address1.Address1 = address1;

            var Address2 = (from add2 in idBoard.ContactDetails where add2.idBusinessEntity == id select add2).FirstOrDefault();

            Address2.Address1 = address2;

            var CP = (from postalCode in idBoard.ContactDetails where postalCode.idBusinessEntity == id select postalCode).FirstOrDefault();

            CP.PostalCode = cp;

            var City = (from cT in idBoard.ContactDetails where cT.idBusinessEntity == id select cT).FirstOrDefault();

            City.City = city;

            var Country = (from cntry in idBoard.ContactDetails where cntry.idBusinessEntity == id select cntry).FirstOrDefault();

            Country.Country = country;

            idBoard.SaveChanges();
            return Ok();
        }



        public IHttpActionResult Get(int id)
        {
            IDBoardDb idBoard = new IDBoardDb(); //Context
            Student student = new Student();


            // mail et téléphone en dur à trouver en base de donnée
            student.phoneNumber = "0634527312";
            student.adresseMail = "test@hotmail.fr";
            student.adresseInfo = new Adresse();
            student.adresseInfo.Addresse1 = (from addresse in idBoard.ContactDetails where (addresse.idBusinessEntity == id) select addresse.Address1).FirstOrDefault();
            student.adresseInfo.Addresse2 = (from addresse in idBoard.ContactDetails where (addresse.idBusinessEntity == id) select addresse.Address2).FirstOrDefault();
            student.adresseInfo.Postal = (from adresse in idBoard.ContactDetails where adresse.idBusinessEntity == id select adresse.PostalCode).FirstOrDefault();
            student.adresseInfo.City = (from adresse in idBoard.ContactDetails where adresse.idBusinessEntity == id select adresse.City).FirstOrDefault();
            student.adresseInfo.Country = (from adresse in idBoard.ContactDetails where adresse.idBusinessEntity == id select adresse.Country).FirstOrDefault(); ;

            student.phtoPath = (from photo in idBoard.BusinessEntities where (photo.idBusinessEntity == id) select photo.PhotoPath).FirstOrDefault();

          
            var count = (from msg in idBoard.JoinEntityMessage where ( msg.idBusinessEntity == id) select msg.idMessage);
            student.messagesTab = new List<string>();
            foreach (var idmsg in count)
            {
                student.messagesTab.Add((from msg in idBoard.Messages where msg.idMessage == idmsg select msg.Title).FirstOrDefault());
            }
            var countEv = (from events in idBoard.Events where (events.idBusinessEntity == id) select events.idEvent);
            student.eventsTab = new List<string>();
            foreach (var evez in countEv)
            {
                student.eventsTab.Add((from even in idBoard.Events where (even.idEvent == evez) select even.BBCode).FirstOrDefault());
            }
            return Ok(JsonConvert.SerializeObject(student));
        }
    }
}
