using System;
using System.Collections.Generic;
using System.DirectoryServices;
using System.DirectoryServices.AccountManagement;
using System.Linq;
using System.DirectoryServices.AccountManagement;
using System.Web;

namespace Backend_Project.Models.ActiveDirectory
{
    public class ActiveDirectoryMethods
    {
        //Method to entry to the AD
        // public DirectorySearcher
        //System.DirectoryServices.AccountManagement
        public bool IfUserExist(string userName)
        {

            ////If we haven't a lpda server
            /* using (var domainContext = new PrincipalContext(ContextType.Domain, "DOMAIN"))
             {
                 using (var foundUser = UserPrincipal.FindByIdentity(domainContext, IdentityType.SamAccountName, userName))
                 {
                     return foundUser != null;
                 }
             }*/



            //If we have a lpda server
            try

            {
                //1-le chemin vers l'annuaire Active Directory (également appelé AD) : ce chemin est de la forme : LDAP://votre-nom-AD ;
                //le nom d'utilisateur pour la connexion (l'utilisateur doit faire partie de l'AD) ;
                //le mot de passe correspondant.

                DirectoryEntry Ldap = new DirectoryEntry("LDAP://votre-nom-AD", "Login", "Password");

                DirectorySearcher searcher = new DirectorySearcher(Ldap);

                searcher.Filter = "(objectClass=user)";

                var result = searcher.FindOne();

                
                    // On récupère l'entrée trouvée lors de la recherche

                    DirectoryEntry DirEntry = result.GetDirectoryEntry();


                    //On peut maintenant afficher les informations désirées

                    Console.WriteLine("Login : " + DirEntry.Properties["SAMAccountName"].Value);

                    Console.WriteLine("Nom : " + DirEntry.Properties["sn"].Value);

                    Console.WriteLine("Prénom : " + DirEntry.Properties["givenName"].Value);

                    Console.WriteLine("Email : " + DirEntry.Properties["mail"].Value);

                    Console.WriteLine("Description : " + DirEntry.Properties["description"].Value);


                    Console.WriteLine("-------------------");

                return true;

            }

            catch (Exception Ex)

            {

                Console.WriteLine(Ex.Message);
                return false;
            }

        }

        /*public static DirectoryEntry GetDirectoryEntry()
        {
            DirectoryEntry de = new DirectoryEntry();
            de.Path = LDAP://192.168.1.1/CN=Users;DC=Yourdomain;
            de.Username = @"yourdomain\sampleuser";
            de.Password = "samplepassword";
            return de;
        }*/

    }
}