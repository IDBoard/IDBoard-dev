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
    
    public partial class AspectsGlobalization
    {
        public int idAspectsGlobalization { get; set; }
        public int idLanguage { get; set; }
        public int idAspect { get; set; }
        public string ElementValue { get; set; }
    
        public virtual Aspects Aspects { get; set; }
        public virtual Languages Languages { get; set; }
    }
}
