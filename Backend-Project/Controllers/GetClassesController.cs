using Backend_Project.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;

namespace Backend_Project.Controllers
{
    public class GetClassesController : ApiController
    {
        private IDBoardDb db = new IDBoardDb();
        //Get one
        public IHttpActionResult Get(int id)
        {

            ClassesIdboard classeIDB = new ClassesIdboard();

            classeIDB.Name = (from name in db.Classes where (name.idClass == id) select name.Name).FirstOrDefault();

            classeIDB.DateStart = (from Ds in db.Classes where (Ds.idClass == id) select Ds.DateStart).FirstOrDefault();

            classeIDB.DateEnd = (from De in db.Classes where (De.idClass == id) select De.DateEnd).FirstOrDefault();

            return Ok(JsonConvert.SerializeObject(classeIDB));
        }
        //Get all
        public IHttpActionResult Get()
        {
            List<ClassesIdboard> classeIDB = new List<ClassesIdboard>();

            var Listclasses = (from a in db.Classes select a);

            foreach (var b in Listclasses)
            {
                var c = new ClassesIdboard();
                c.idClass = b.idClass;
                c.Name = b.Name;
                c.DateStart = b.DateStart;
                c.DateEnd = b.DateEnd;
                classeIDB.Add(c);
            }

           
            return Ok(JsonConvert.SerializeObject(classeIDB));
        }
        //Update
        [ResponseType(typeof(void))]
        public IHttpActionResult PutClasseIdboard(int idClass, ClassesIdboard Classes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (idClass != Classes.idClass)
            {
                return BadRequest();
            }

            db.Entry(Classes).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClassesIdboardExists(idClass))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }
        //Create
        [ResponseType(typeof(ClassesIdboard))]
        public IHttpActionResult PostClassesIdboard(Classes Classes)
        {
            return (Ok());
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Classes.Add(Classes);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { idClass = Classes.idClass }, Classes);
        }
        //Delete
        [ResponseType(typeof(ClassesIdboard))]
        public IHttpActionResult DeleteClassesIdboard(int idClass)
        {
            Classes classesIdboard = db.Classes.Find(idClass);
            if (classesIdboard == null)
            {
                return NotFound();
            }

            db.Classes.Remove(classesIdboard);
            db.SaveChanges();

            return Ok(classesIdboard);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ClassesIdboardExists(int idClass)
        {
            return db.Classes.Count(e => e.idClass == idClass) > 0;
        }
        //Duplicate
        [ResponseType(typeof(ClassesIdboard))]
        public IHttpActionResult DuplicateClassesIdboard(int idClass, string name)
        {
            Classes classesIdboard = db.Classes.Find(idClass);
            classesIdboard.Name = name;

            db.Classes.Add(classesIdboard);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { idClass = classesIdboard.idClass }, classesIdboard);
        }


    }
}