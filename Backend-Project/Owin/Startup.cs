using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;

[assembly: OwinStartup(typeof(Backend_Project.Owin.Startup))]

namespace Backend_Project.Owin
{
    public class Startup
    {
          public void Configuration(IAppBuilder app)
            {
                //This class will be fired once our server starts
                //Http is used to configure api routes
                HttpConfiguration config = new HttpConfiguration();

                ConfigureOAuth(app);

                WebApiConfig.Register(config);
                //app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
                app.UseWebApi(config);
            }


            public void ConfigureOAuth(IAppBuilder app)
            {
                OAuthAuthorizationServerOptions OAuthServerOptions = new OAuthAuthorizationServerOptions()
                {
                    AllowInsecureHttp = true,
                    TokenEndpointPath = new PathString("/token"),
                    AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
                    //How to validate the credentials for users asking for tokens
                    Provider = new SimpleAuthorizationServerProvider()
                };
                // Token Generation
                app.UseOAuthAuthorizationServer(OAuthServerOptions);
                app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());

            }
        }

    }


