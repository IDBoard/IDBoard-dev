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
    
    public partial class SystemLevelsGlobalization
    {
        public int idSystemLevelGlobalization { get; set; }
        public int idLanguage { get; set; }
        public string ElementValue { get; set; }
        public int idSystemLevel { get; set; }
    
        public virtual Languages Languages { get; set; }
        public virtual SystemLevels SystemLevels { get; set; }
    }
}
