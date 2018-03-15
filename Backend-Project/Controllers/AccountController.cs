using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend_Project.Controllers
{
    [RoutePrefix("api/Account")]
    public class AccountController : ApiController
    {
        private AuthRepository _repo = null;

        public AccountController()
        {
            _repo = new AuthRepository();
        }

        // POST api/Account/Register
        [AllowAnonymous]
        [Route("Register")]
        public async Task<IHttpActionResult> Register(BusinessEntity userModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IdentityResult result = await _repo.RegisterUser(userModel);

            IHttpActionResult errorResult = GetErrorResult(result);

            if (errorResult != null)
            {
                return errorResult;
            }

            return Ok();
        }


        [Authorize(Roles = "admin")]
        [Route("users")]
        // GET: User
        public IQueryable<BusinessEntityDTO> getUsers()
        {
            return _repo.GetUsers();
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _repo.Dispose();
            }

            base.Dispose(disposing);
        }




        private IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
            {
                return InternalServerError();
            }

            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (string error in result.Errors)
                    {
                        ModelState.AddModelError("", error);
                    }
                }

                if (ModelState.IsValid)
                {
                    // No ModelState errors are available to send, so just return an empty BadRequest.
                    return BadRequest();
                }

                return BadRequest(ModelState);
            }

            return null;
        }


        //Post Account/ForgotPassword
        [AllowAnonymous]
        [Route("forgotPass")]
        [HttpPost]
        public async Task<IHttpActionResult> ForgotPassword(ForgotPasswordViewModel userModel)
        {
            if (ModelState.IsValid)
            {
                var user = await _repo.FindUserByEmail(userModel.Email);
                string code = await _repo.GenerateToken(user);
                await _repo.SendEmail(user, code);
                return Ok();
            }
            else
            {

                return BadRequest();
            }
        }


        [HttpPost]
        [AllowAnonymous]
        [Route("ResetPassword")]
        public async Task<IHttpActionResult> ResetPassword(ResetPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = await _repo.FindUserByEmail(model.Email);
            if (user == null)
            {
                // Don't reveal that the user does not exist
                return Ok();
            }
            var result = await _repo.ResetPassword(model);

            return Ok();
        }


        //Post Account/ResetPassword
        /* [HttpPost]
         [AllowAnonymous]
         public async Task<IHttpActionResult> ResetPassword(ResetPasswordViewModel model)
         {
             var user = await _repo.FindUserByEmail(model.Email);

             var result = await 
         }*/




    }
}