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
    
    public partial class LogsConnection
    {
        public int idLogsConnection { get; set; }
        public int ResultType { get; set; }
        public string Login { get; set; }
        public string RemoteIPAddress { get; set; }
        public string RemoteUser { get; set; }
        public string RemoteHost { get; set; }
        public string Navigator { get; set; }
        public System.DateTime EventDate { get; set; }
    }
}
