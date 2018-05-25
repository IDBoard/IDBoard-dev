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
         public class Trombi
        {
            public List<Student> listStudent { get; set; }
            public string nameClass { get; set; }
            public int nbStudent { get; set; }
        }
        public class Student
        {
            public string Name { get; set; }
            public string FirstName { get; set; }
            public int id { get; set; }
            public string Picture { get; set; }
        }


        public IHttpActionResult Get(int id)
        {
            IDBoardDb idBoard = new IDBoardDb(); // Context
            Trombi trombi = new Trombi(); // Contenu du trombinoscope renvoyé en json

            var listId = (from idBE in idBoard.JoinEntityClass where (idBE.idClass == id) select idBE.idBusinessEntity).ToList<int>();  // Recup des idBE des eleves dans la classe
            trombi.nbStudent = listId.Count(); // Affectation du nombre d'étudiant
            
            if (trombi.nbStudent == 0)
            {
                return Ok(JsonConvert.SerializeObject(-1));
            }
            trombi.nameClass = (from nameClass in idBoard.Classes where (nameClass.idClass == id) select nameClass.Name).First(); // Affectation du nom de la classe
            List<string> listName = new List<string>();
            foreach (var IDB in listId)
            {
              listName.Add((from eleve in idBoard.BusinessEntities where eleve.idBusinessEntity == IDB select eleve.Name).FirstOrDefault()); // Récupérations des prénoms en fonction de idBusinessEntity
            }
            List<string> listPicture = new List<string>();
            foreach (var IDB in listId)
            {
                listPicture.Add((from picture in idBoard.BusinessEntities where picture.idBusinessEntity == IDB select picture.PhotoPath).FirstOrDefault());
            }

            List<string> listFirstName = new List<string>();
            foreach (var IDB in listId)
            {
              listFirstName.Add((from eleve in idBoard.BusinessEntities where eleve.idBusinessEntity == IDB select eleve.FirstName).FirstOrDefault()); // Récupérations des noms en fonction de idBusinessEntity
            }

            trombi.listStudent = new List<Student>(); // Création de la liste contenant les étudiants
            for (int i = 0; i < trombi.nbStudent; i++) //Boucle de création d'étudiant et d'affectation de ses attributs
            {
                Student student = new Student();
                student.id = listId[i];
                student.Name = listName[i];
                student.FirstName = listFirstName[i];
                student.Picture = listPicture[i];
                trombi.listStudent.Add(student);
            }
            return Ok(JsonConvert.SerializeObject(trombi));
        }
    }
}
