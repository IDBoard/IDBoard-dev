using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend_Project.Controllers
{

    public class GetTrombi2Controller : ApiController
    {
        public class ClassTrombi
        {
            public int nbStudent { get; set; } // Nombre d'élèves dans une classe
            public string nameClass { get; set; } // Nom de la classe
            public List<string> nameStudent { get; set; }
            public List<string> firstNameStudent { get; set; }
            public List<int> idStudent { get; set; } // List des  élèves

        }
        public IHttpActionResult Get(int id)
        {
            IDBoardDb idBoard = new IDBoardDb(); // Context
            ClassTrombi trombi = new ClassTrombi(); // Contenu du trombinoscope renvoyé en json
            trombi.idStudent = new List<int>(); // Liste des idBusineesEntity

            var listId = from idBE in idBoard.JoinEntityClass where (idBE.idClass == id) select idBE.idBusinessEntity;
            trombi.idStudent = listId.ToList();

            trombi.nbStudent = listId.Count();

            trombi.nameClass = (from name in idBoard.Classes where (name.idClass == id) select name.Name).First();

            trombi.nameStudent = new List<string>();
            foreach (var IDB in trombi.idStudent)
            {
                trombi.nameStudent.Add((from eleve in idBoard.BusinessEntities where eleve.idBusinessEntity == IDB select eleve.Name).FirstOrDefault());
            }

            trombi.firstNameStudent = new List<string>();
            foreach (var IDB in trombi.idStudent)
            {
                trombi.firstNameStudent.Add((from eleve in idBoard.BusinessEntities where eleve.idBusinessEntity == IDB select eleve.FirstName).FirstOrDefault());
            }

       

            return Ok(JsonConvert.SerializeObject(trombi));
        }
    }
}
