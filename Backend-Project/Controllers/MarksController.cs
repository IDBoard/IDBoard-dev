using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Diagnostics;


namespace Backend_Project.Controllers
{
    public class MarksController : ApiController
    {
        // Push marks for a specific classe
        //
        //***************************************************************************************
        // Format du json qui contient les informations des notes à passer en parametre
        // 
        // _MarksInfos = {'marks':[{'idBusinessEntity':8,'markCoef':1,'mark':14,'markComment':'bien', 'IsJustifiedAbsence':true},{'idBusinessEntity':9,'markCoef':1,'mark':10,'markComment':'passable','IsJustifiedAbsence':true},{'idBusinessEntity':10,'markCoef':1,'mark':17,'markComment':'très bien','IsJustifiedAbsence':true}]}
        //
        //***************************************************************************************

        //!\\ Attention //!\\ La fonction ne peux marcher que si : - L'ID matter existe en DB
        //                                                         - Les ID type evaluation existes en DB
        //                                                         - Les ID businessEntity existes en DB
        //                                                         - L'ID class existe en DB
        //                                                         - L'ID site de la class existe en DB
        //
        // Données à rajouter en DB pour tester avec le json de test écrit au dessus (_MarksInfos)
        // => https://pastebin.com/raw/dDukq6MK (créé un site, 3 éleves, une classe, une matter)
        //
        // Exemple de Post 
        // => https://image.noelshack.com/fichiers/2018/23/5/1528417201-exemple.png
        //

        [HttpPost]
        public IHttpActionResult PushMarks(int _idClass, int _idMatter, int _idTypeEvaluation, string _MarksInfos) // _MarksInfos est ensuite sérialisé en json (voir le format au dessus)
        {
            IdBoardDb iDBoard = new IdBoardDb();

            var jsonMarksInfos = JsonConvert.DeserializeObject<dynamic>(_MarksInfos);

            foreach (var markInfos in jsonMarksInfos.marks) // On boucle sur chaque eleve pour remplir une mark par eleve
            {
                Marks newMarkQuery = new Marks
                {
                    idMark = 0,
                    idBusinessEntity = markInfos.idBusinessEntity,
                    idMatter = _idMatter,
                    idClass = _idClass,
                    idTypeEvaluation = _idTypeEvaluation,
                    Coefficient = markInfos.markCoef,
                    Value = markInfos.mark,
                    Comments = markInfos.markComment,
                    DateCreation = DateTime.Today,
                    IsJustifiedAbsence = markInfos.IsJustifiedAbsence
                };

                iDBoard.Marks.Add(newMarkQuery);
                iDBoard.SaveChanges();

            }
            
            return Ok();
        }
    }
}
