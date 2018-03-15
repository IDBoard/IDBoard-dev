using Backend_Project.Models.Repository;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace Backend_Project.Owin
{
    internal class SimpleAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        //this method validate the client
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        //This method validate username and password
        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            //To allow CORS on the token
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

            using (AuthRepository _repo = new AuthRepository())
            {
                MyContext ctx = new MyContext();
                var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                IdentityUser user = await _repo.FindUser(context.UserName, context.Password);
                var role = await _repo.sd(user);
                if (role == 2)
                {
                    identity.AddClaim(new Claim(ClaimTypes.Role, "admin"));
                    identity.AddClaim(new Claim("username", "admin"));
                    identity.AddClaim(new Claim(ClaimTypes.Name, "CampusIdAdmin"));
                    context.Validated(identity);
                }
                if (role == 1)
                {
                    identity.AddClaim(new Claim(ClaimTypes.Role, "student"));
                    identity.AddClaim(new Claim("username", "students"));
                    identity.AddClaim(new Claim(ClaimTypes.Name, "CampusIdUser"));
                    context.Validated(identity);
                }

                if (user == null)
                {
                    context.SetError("invalid_grant", "The user name or password is incorrect.");
                    return;
                }
            }

            /* var identity = new ClaimsIdentity(context.Options.AuthenticationType);
             identity.AddClaim(new Claim("sub", context.UserName));
             identity.AddClaim(new Claim("role", "user"));*/

            //here wew create the token
            //context.Validated(identity);

        }
    }
}