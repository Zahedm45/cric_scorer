package service;

import dal.HibernateController;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import model.Items;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.criteria.JpaCriteriaQuery;
import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

@Path("items")
public class ItemsService {

    static final SessionFactory sessionFactory = new HibernateController("pgtest.grp2.diplomportal.dk:5432/pg").getSessionFactory();

    @GET
    public List<Items> getOrders() {
        Session session = sessionFactory.openSession();
        JpaCriteriaQuery<Items> query = session.getCriteriaBuilder().createQuery(Items.class);
        query.from(Items.class);
        List<Items> data = session.createQuery(query).getResultList();
        return data;
    }
}
