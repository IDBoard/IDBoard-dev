//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Backend_Project
{
    using System;
    using System.Collections.Generic;
    
    public partial class Courses
    {
        public int idCourse { get; set; }
        public int idTypeCourse { get; set; }
        public int idMatter { get; set; }
        public int idTeacher { get; set; }
        public int idClass { get; set; }
        public System.DateTime DateStart { get; set; }
        public System.DateTime DateEnd { get; set; }
        public bool PresentTeacher { get; set; }
        public string Comments { get; set; }
    
        public virtual BusinessEntities BusinessEntities { get; set; }
        public virtual Classes Classes { get; set; }
        public virtual Matters Matters { get; set; }
        public virtual TypesCourses TypesCourses { get; set; }
    }
}
