using System;
using System.Collections.Generic;
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
            using (var domainContext = new PrincipalContext(ContextType.Domain, "DOMAIN"))
            {
                using (var foundUser = UserPrincipal.FindByIdentity(domainContext, IdentityType.SamAccountName, userName))
                {
                    return foundUser != null;
                }
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