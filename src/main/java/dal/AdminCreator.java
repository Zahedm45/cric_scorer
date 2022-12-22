package dal;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import model.*;
import org.mindrot.jbcrypt.BCrypt;


public class AdminCreator {
    final static String HOST = "pgtest.grp2.diplomportal.dk:5432/pg";

    @org.junit.Test
    public void createAdmin() {
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        AdminUser adminUser = new AdminUser();

        adminUser.setId(1);
        adminUser.setUsername("admin");
        adminUser.setPassword(BCrypt.hashpw("password", "$2a$10$CwTycUXWue0Thq9StjUM0u"));

        session.persist(adminUser);
        transaction.commit();
        session.close();
    }
}