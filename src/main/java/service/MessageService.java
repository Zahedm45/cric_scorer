package service;

import dal.HibernateController;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import model.Message;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.criteria.JpaCriteriaQuery;

import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Path("message")
public class MessageService {
    private static final SessionFactory sessionFactory = new HibernateController("pgtest.grp2.diplomportal.dk:5432/pg").getSessionFactory();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createCustomerData(Message message){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.persist(message);
        transaction.commit();
        Transaction readTransaction = session.beginTransaction();
        readTransaction.commit();
        session.close();
        return Response.ok(message.getId()).build();
    }

    @GET
    public List<Message> getQuestion() {
        Session session = sessionFactory.openSession();
        JpaCriteriaQuery<Message> query = session.getCriteriaBuilder().createQuery(Message.class);
        query.from(Message.class);
        List<Message> data = session.createQuery(query).getResultList();
        return data;
    }

}
