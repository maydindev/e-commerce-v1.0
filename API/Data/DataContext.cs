using API.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : IdentityDbContext<AppUser, AppRole, string>(options)
{
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Cart> Carts => Set<Cart>();
    public DbSet<Order> Orders => Set<Order>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().HasData(
            new List<Product> {
                new Product { Id=1, Name="Damacana 19 Litre", Description="Lorem Ipsum", ImageUrl="1.jpg", Price=89, IsActive=true, Stock=100  },
                new Product { Id=2, Name="Pompa", Description="Lorem Ipsum", ImageUrl="2.jpg", Price=149, IsActive=true, Stock=100  },
                new Product { Id=3, Name="Pet Şişe 10 Litre", Description="Lorem Ipsum", ImageUrl="3.jpg", Price=59, IsActive=false, Stock=100  },
                new Product { Id=4, Name="Pet Şişe 5 Litre", Description="Lorem Ipsum", ImageUrl="4.jpg", Price=34, IsActive=true, Stock=100  },
                new Product { Id=5, Name="Pet Şişe 1.5 Litre", Description="Lorem Ipsum", ImageUrl="5.jpg", Price=24, IsActive=true, Stock=100  },
                new Product { Id=6, Name="Pet Şişe 1 Litre", Description="Lorem Ipsum", ImageUrl="6.jpg", Price=18, IsActive=true, Stock=100  },
                new Product { Id=7, Name="Pet Şişe 500 ml", Description="Lorem Ipsum", ImageUrl="7.jpg", Price=12, IsActive=true, Stock=100  },
                new Product { Id=8, Name="Pet Şişe 330 ml", Description="Lorem Ipsum", ImageUrl="8.jpg", Price=4, IsActive=true, Stock=100  },
                new Product { Id=9, Name="Cam Şişe 750 ml", Description="Lorem Ipsum", ImageUrl="9.jpg", Price=39, IsActive=true, Stock=100  },
                new Product { Id=10, Name="Cam Şişe 330 ml", Description="Lorem Ipsum", ImageUrl="10.jpg", Price=35, IsActive=true, Stock=100  },
                new Product { Id=11, Name="Bardak 250 ml", Description="Lorem Ipsum", ImageUrl="11.jpg", Price=2, IsActive=true, Stock=100  },
                new Product { Id=12, Name="Bardak 200 ml", Description="Lorem Ipsum", ImageUrl="12.jpg", Price=1, IsActive=true, Stock=100  },
                new Product { Id=13, Name="Damacana Boş", Description="Lorem Ipsum", ImageUrl="13.jpg", Price=150, IsActive=false, Stock=0  }
            }
        );


    }

}