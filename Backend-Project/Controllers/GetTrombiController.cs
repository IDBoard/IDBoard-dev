using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend_Project.Controllers
{

    public class GetTrombiController : ApiController
    {
        public IHttpActionResult Get(int id)
        {
            IDBoardDb idBoard = new IDBoardDb();

//          var listStudent = from eleves in idBoard.BusinessEntities select eleves;
            var listId = from idBE in idBoard.JoinEntityClass where (idBE.idClass == id) select idBE.idBusinessEntity;
            List<int> listStudent = new List<int>();
            foreach (var IDB in listId)
            {
                //var Student = from eleve in idBoard.BusinessEntities where eleve.idBusinessEntity == IDB select eleve.idBusinessEntity;
                //listStudent.Add(Student);
                listStudent.Add((from eleve in idBoard.BusinessEntities where eleve.idBusinessEntity == IDB select eleve.idBusinessEntity).FirstOrDefault());
            }
            List<string> listS = new List<string>();
            foreach (var lS in listStudent)
            {
                listS.Add((from eleve in idBoard.BusinessEntities where eleve.idBusinessEntity == lS select eleve.Name).FirstOrDefault());
            }
            return Ok(JsonConvert.SerializeObject(listS));
        }
    }
}
