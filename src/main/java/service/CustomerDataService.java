package service;

import dal.HibernateController;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import model.CustomerData;
import model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.criteria.JpaCriteriaQuery;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Path("data")
public class CustomerDataService {
    private static final SessionFactory sessionFactory = new HibernateController("pgtest.grp2.diplomportal.dk:5432/pg").getSessionFactory();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createCustomerData(CustomerData customerData){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.persist(customerData);
        transaction.commit();
        Transaction readTransaction = session.beginTransaction();
        readTransaction.commit();
        session.close();
        return Response.ok(customerData.getId()).build();
    }

    @GET
    public List<CustomerData> getCustomerData() {
        Session session = sessionFactory.openSession();
        JpaCriteriaQuery<CustomerData> query = session.getCriteriaBuilder().createQuery(CustomerData.class);
        query.from(CustomerData.class);
        List<CustomerData> data = session.createQuery(query).getResultList();
        return data;
    }

}
