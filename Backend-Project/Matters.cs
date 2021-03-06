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
    
    public partial class Matters
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Matters()
        {
            this.Chapters = new HashSet<Chapters>();
            this.Courses = new HashSet<Courses>();
            this.JoinMatterDomain = new HashSet<JoinMatterDomain>();
            this.Marks = new HashSet<Marks>();
            this.MattersGlobalization = new HashSet<MattersGlobalization>();
        }
    
        public int idMatter { get; set; }
        public int idClass { get; set; }
        public string Reference { get; set; }
        public string DescriptionDefaultValue { get; set; }
        public Nullable<int> MarksNumber { get; set; }
        public Nullable<double> ECTSCredits { get; set; }
        public System.Guid Identifier { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Chapters> Chapters { get; set; }
        public virtual Classes Classes { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Courses> Courses { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<JoinMatterDomain> JoinMatterDomain { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Marks> Marks { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MattersGlobalization> MattersGlobalization { get; set; }
    }
}
