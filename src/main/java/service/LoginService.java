package service;

import dal.HibernateController;
import dal.JWTHandler;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import model.*;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.criteria.JpaCriteriaQuery;
import org.mindrot.jbcrypt.*;

import java.util.List;

@Path("auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginService {
    private static final SessionFactory sessionFactory = new HibernateController("pgtest.grp2.diplomportal.dk:5432/pg").getSessionFactory();
    @GET
    public String helloWorld() {
        return "Hello World";
    }
    @Path("login")
    @POST
    public String postLoginData(LoginData login) throws NotAuthorizedException
    {
        Session session = sessionFactory.openSession();
        JpaCriteriaQuery<AdminUser> query = session.getCriteriaBuilder().createQuery(AdminUser.class);
        query.from(AdminUser.class);
        AdminUser adminUser = session.createQuery(query).getSingleResult();

        if (login!=null){
            if(adminUser.getUsername().equals(login.getUsername()) && adminUser.getPassword().equals(BCrypt.hashpw(login.getPassword(), "$2a$10$CwTycUXWue0Thq9StjUM0u")) ){
            return JWTHandler.generateJwtToken(new User(login.getUsername(), login.getPassword()));
            }
        }

        throw new NotAuthorizedException("forkert brugernavn/kodeord");
    }

    
    @GET
    @Path("query")
    public List<User> queryUsers(@QueryParam("name") String name) throws NoImplementationException {
        //No implementation yet (not MVP)
        throw new NoImplementationException("user-queries not implemented, yet");
    }
}




