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
        }

        public IHttpActionResult Get(int id)
        {
            IDBoardDb idBoard = new IDBoardDb(); //Context
            Student student = new Student();

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
