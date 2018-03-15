using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend_Project.Controllers
{
    public class GetMessagesController : ApiController
    {
        public class Message
        {
            public string Title { get; set; }
            public string BBCODE { get; set; }
            public DateTime DateStart { get; set; }
            public DateTime DateEnd { get; set; }
            public Boolean Priority { get; set; }
            public Boolean AdminRequ { get; set; }
            public Boolean ModifReq { get; set; }
        }
        
        public IHttpActionResult Get(int id)
        {
            IDBoardDb idBoard = new IDBoardDb(); //Context
            List<Message> messages;

            var count = (from msg in idBoard.JoinEntityMessage where (msg.idBusinessEntity == id) select msg.idMessage);

            messages = new List<Message>();

            foreach (var idmsg in count)
            {
            //bon c'est chiant, je vais continuer ma fct et régler ce bug so'              
                Message message = new Message();
                message.Title = (from msg in idBoard.Messages where msg.idMessage == idmsg select msg.Title).FirstOrDefault();
                message.BBCODE = (from msg in idBoard.Messages where msg.idMessage == idmsg select msg.Title).FirstOrDefault();
                message.DateStart = (from msg in idBoard.Messages where msg.idMessage == idmsg select msg.DateStart).FirstOrDefault();
                message.DateEnd = DateTime.Now;
                message.DateEnd = (from msg in idBoard.Messages where (msg.idMessage == idmsg && msg.DateEnd != null) select msg.DateEnd).FirstOrDefault() ;
                if (message.DateEnd.Equals(null))
                    message.DateEnd = DateTime.Now;
                message.Priority = (from msg in idBoard.Messages where msg.idMessage == idmsg select msg.Priority).FirstOrDefault();
                message.AdminRequ = (from msg in idBoard.Messages where msg.idMessage == idmsg select msg.AdministrativeRequest).FirstOrDefault();
                message.ModifReq = (from msg in idBoard.Messages where msg.idMessage == idmsg select msg.ModificationRequest).FirstOrDefault();
                messages.Add(message);
            }
            return Ok(JsonConvert.SerializeObject(messages));
        }
    }
}
