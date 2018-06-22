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
        public class Student
        {
            public string nameStudent { get; set; }
            public string firstNameStudent { get; set; }
            public int idStudent { get; set; }
            public string phtoPath { get; set; }
            public Boolean activity { get; set; }
        }

        public class ClassTrombi
        {
            public int nbStudent { get; set; } // Nombre d'élèves dans une classe
            public string nameClass { get; set; } // Nom de la classe
            public List<Student> students { get; set; }


        }

        public IHttpActionResult Get(int id)
        {
            IDBoardDb idBoard = new IDBoardDb(); // Context
            ClassTrombi trombi = new ClassTrombi(); // Contenu du trombinoscope renvoyé en json
            List<int> idStudent;
            idStudent = new List<int>(); // Liste des idBusineesEntity

            var listId = from idBE in idBoard.JoinEntityClass where (idBE.idClass == id) select idBE.idBusinessEntity;
            idStudent = listId.ToList();

            trombi.nbStudent = listId.Count();

            trombi.nameClass = (from name in idBoard.Classes where (name.idClass == id) select name.Name).First();

            trombi.students = new List<Student>();
            foreach (var IDB in idStudent)
            {
                Student student = new Student();
                student.nameStudent = (from eleve in idBoard.BusinessEntities where eleve.idBusinessEntity == IDB select eleve.Name).FirstOrDefault();
                student.firstNameStudent = (from eleve in idBoard.BusinessEntities where eleve.idBusinessEntity == IDB select eleve.FirstName).FirstOrDefault();
                student.idStudent = IDB;
                student.phtoPath = (from photo in idBoard.BusinessEntities where (photo.idBusinessEntity == id) select photo.PhotoPath).FirstOrDefault();

                var dateE = (from eleve in idBoard.BusinessEntities
                                  join EleveInfos in idBoard.Informations on eleve.idBusinessEntity equals EleveInfos.idBusinessEntity
                                  where eleve.idBusinessEntity == IDB
                                  select new
                                  {
                                      EleveInfos.DateEnd
                                  }).FirstOrDefault();


                if (dateE.DateEnd == null)
                {
                    student.activity = true;
                    //   return Ok(JsonConvert.SerializeObject(dateendlol));
                }
                else
                {


                    student.activity = false;
                    // return Ok(JsonConvert.SerializeObject(dateendlol));


                }
                student.phtoPath = (from photo in idBoard.BusinessEntities where (photo.idBusinessEntity == id) select photo.PhotoPath).FirstOrDefault();

                trombi.students.Add(student);
            }


            return Ok(JsonConvert.SerializeObject(trombi));
        }
    }
}
