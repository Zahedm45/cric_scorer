package service;

import dal.HibernateController;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import model.Items;
import model.Order;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.criteria.JpaCriteriaQuery;
import jakarta.ws.rs.core.Response;
import org.hibernate.Transaction;
import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("orders")
public class OrderService {
    private final SessionFactory sessionFactory = new HibernateController("pgtest.grp2.diplomportal.dk:5432/pg").getSessionFactory();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createOrder(Order order){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        //Session.persist() creates the order and alters the id
        session.persist(order);
        //we alter the items object in the db for each item in the order
        for (Items item: order.getOrderedFoodProducts()) {
            //Defines the foreign key to the value of the order
            item.setOrder(order);
            session.persist(item);
        }
        transaction.commit();
        Transaction readTransaction = session.beginTransaction();
        readTransaction.commit();
        session.close();
        return Response.ok(getOrders()).build();
    }

    @GET
    public List<Order> getOrders() {
        Session session = sessionFactory.openSession();
        JpaCriteriaQuery<Order> query = session.getCriteriaBuilder().createQuery(Order.class);
        query.from(Order.class);
        List<Order> data = session.createQuery(query).getResultList();
        return data;
    }
}