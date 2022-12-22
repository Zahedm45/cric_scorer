package dal;

import model.*;
import model.PaymentDB;
import model.Order;
import model.CustomerData;
import model.Message;
import model.User;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;


public class HibernateController {//Should be a singleton…
    private final SessionFactory sessionFactory;
    public HibernateController(String dbUrl){
        Configuration configuration = new Configuration();
        configuration.addAnnotatedClass(User.class); //remember to do this for all DB entities
        configuration.addAnnotatedClass(Order.class); //remember to do this for all DB entities
        configuration.addAnnotatedClass(Items.class);//NB org.hibernate.cfg.Configuration
        configuration.addAnnotatedClass(CustomerData.class);
        configuration.addAnnotatedClass(LoginData.class);
        configuration.addAnnotatedClass(Message.class);
        //configuration.addAnnotatedClass(Question.class);
        configuration.addAnnotatedClass(AdminUser.class);
        //configuration.addAnnotatedClass(TracingInfo.Message.class);
        configuration.addAnnotatedClass(PaymentDB.class);
        configuration.setProperty("hibernate.connection.username", System.getenv("devopse22user"));
        configuration.setProperty("hibernate.connection.password", System.getenv("devopse22pass"));
        configuration.setProperty("hibernate.connection.url", "jdbc:postgresql://" + dbUrl);
        configuration.setProperty("hibernate.hbm2ddl.auto","update"); //update Schema - don't do this in prod
        this.sessionFactory = configuration.buildSessionFactory();
    }




    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

}
