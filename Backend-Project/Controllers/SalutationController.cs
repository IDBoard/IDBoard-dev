using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Backend_Project.Controllers
{
    public class SalutationController : ApiController
    {
        // GET: Salutation

        public IHttpActionResult Get()
        {
            IDBoardDb iDBoard = new IDBoardDb();

            //            return Ok(from salutation in iDBoard.Salutations.ToList()
            //                    select salutation);
            var list = from salutation in iDBoard.Salutations select salutation;
            return Ok(JsonConvert.SerializeObject(list));
        }
    }




    //  il faut que ton controller soit un controller empty quand tu le crées
    //  qu'il hérite de ApiController (issu de la référence System.net.Http)
    //  puis que tu fasses cette requête dans management studio :
    //USE[IDBoard]
    //GO

    //INSERT INTO[dbo].[Salutations]
    //      ([SalutationDefaultValue])
    // VALUES
    //        ('Monsieur')
    //GO
    //INSERT INTO[dbo].[Salutations]
    //    ([SalutationDefaultValue])
    //VALUES
    //         ('Madame')
    //GO
    //INSERT INTO[dbo].[Salutations]
    //       ([SalutationDefaultValue])
    //  VALUES
    //       ('Petit caca')
    //GO
    //INSERT INTO[dbo].[Salutations]
    //       ([SalutationDefaultValue])
    //  VALUES
    //      ('Une civilité inexistante')
    //GO
}