using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend_Project.Models.Repository
{ 
    public class MyContext : IdentityDbContext<BusinessEntity>
    {
        public MyContext()
           : base("MyBusinessConnection", throwIfV1Schema: false)
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
        }

        public static MyContext Create()
        {
            return new MyContext();
        }
    }
}