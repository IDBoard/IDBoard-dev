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
    
    public partial class TypesInformations
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TypesInformations()
        {
            this.Informations = new HashSet<Informations>();
            this.TypesInformationsGlobalization = new HashSet<TypesInformationsGlobalization>();
        }
    
        public int idTypeInformation { get; set; }
        public string TypeDefaultValue { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Informations> Informations { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TypesInformationsGlobalization> TypesInformationsGlobalization { get; set; }
    }
}
