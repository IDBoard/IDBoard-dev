using Backend_Project.Models.ViewModel;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Backend_Project.Models.Repository
{

        public class AuthRepository : IDisposable
        {

            private MyContext _ctx;

            private UserManager<BusinessEntity> _userManager;


            public AuthRepository()
            {
                _ctx = new MyContext();
                _userManager = new UserManager<BusinessEntity>(new UserStore<BusinessEntity>(_ctx));
           // X    // var provider = new DpapiDataProtectionProvider("Sample");
           //MAIL  // _userManager.UserTokenProvider = new DataProtectorTokenProvider<BusinessEntity>(
                  //  provider.Create("EmailConfirmation"));
                 //_userManager.EmailService = new EmailService();
            }


            //Register User (Post Man username,password,confirmpassword)
            public async Task<IdentityResult> RegisterUser(BusinessEntity userModel)
            {
                IdentityUser user = new IdentityUser
                {
                    UserName = userModel.UserName
                };

                //Usermodel.password in createasync is hashpassword in db
                var result = await _userManager.CreateAsync(userModel, userModel.Password);

                return result;
            }

            //Find User 
            public async Task<int> sd(IdentityUser userr)
            {

                var roles = userr.Roles.FirstOrDefault();
                return Convert.ToInt16(roles.RoleId);
            }

            /*  [HttpPost]
              [AllowAnonymous]
              [Route("ForgotPassword")]
              public async Task<IHttpActionResult> ForgotPassword(ForgotPasswordViewModel model)
              {
                  if (ModelState.IsValid)
                  {
                      var user = await UserManager.FindByNameAsync(model.Email);
                      // If user has to activate his email to confirm his account, the use code listing below
                      //if (user == null || !(await UserManager.IsEmailConfirmedAsync(user.Id)))
                      //{
                      //    return Ok();
                      //}
                      if (user == null)
                      {
                          return Ok();
                      }

                      // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=320771
                      // Send an email with this link
                      string code = await UserManager.GeneratePasswordResetTokenAsync(user.Id);
                      await UserManager.SendEmailAsync(user.Id, "Reset Password", $"Please reset your password by using this {code}");
                      return Ok();
                  }

                  // If we got this far, something failed, redisplay form
                  return BadRequest(ModelState);
              }*/

            //Find User
            public async Task<IdentityUser> FindUser(string userName, string password)
            {
                IdentityUser user = await _userManager.FindAsync(userName, password);

                return user;
            }

            public void Dispose()
            {
                _ctx.Dispose();
                _userManager.Dispose();

            }


            //Get Users 
            public IQueryable<BusinessEntityDTO> GetUsers()
            {
                var users = _ctx.Users.Select(u => new BusinessEntityDTO { Username = u.UserName });
                return users;
            }

            //FindUser with Email
            public async Task<IdentityUser> FindUserByEmail(string email)
            {
                IdentityUser user = await _userManager.FindByEmailAsync(email);

                return user;
            }


            //Generate Token for Reset Token
            public async Task<string> GenerateToken(IdentityUser user)
            {
                string code = await _userManager.GeneratePasswordResetTokenAsync(user.Id);
                return code;
            }

            /*public async Task<string> SendEmail(IdentityUser user, string callbackurl)
            {
                await _userManager.SendEmailAsync(user.Id, "Reset Password","Redémarrer le mot de passe en cliquant sur <a href=\"" + callbackurl + "\">click</a>");
                return "Ok";
            }*/

            //SendEmail
            public async Task<string> SendEmail(IdentityUser user, string callback)
            {
                await _userManager.SendEmailAsync(user.Id, "Reset Password", "Redémarrer le mot de passe en cliquant sur <a href=\"" + callback + "\">click</a>");
                return "Ok";
            }


            //Reset password
            public async Task<IdentityUser> ResetPassword(ResetPasswordViewModel model)
            {
                IdentityUser user = _userManager.FindByNameAsync(model.Email).Result;
                var result = await _userManager.ResetPasswordAsync(user.Id, model.code, model.Password);
                if (result.Succeeded)
                    return user;
                else
                    return null;
            }

        }
    }
