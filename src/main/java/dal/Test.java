package dal;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import model.*;
import org.mindrot.jbcrypt.BCrypt;
import service.CustomerDataService;
import service.LoginService;
import service.NotAuthorizedException;
import utility.GlobalVariable;


public class Test {
    final static String HOST = GlobalVariable.HOST;

    @org.junit.Test
    public void testCreate(){
        HibernateController hibernateController =
                new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        User user = new User();
        System.out.println("UserID before commit: " + user.getId());
        user.setUsername("usernametest");
        session.persist(user);
        transaction.commit();
        System.out.println("UserID after commit: " + user.getId());
        Transaction readTransaction = session.beginTransaction();
        User readUser = session.get(User.class, user.getId());
        System.out.println("Read user back: " + readUser.toString());
        readTransaction.commit();
        session.close();
    }

    @org.junit.Test
    public void testCreateOrder(){
        HibernateController hibernateController =
                new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Order order = new Order();
        System.out.println("ORDERID before commit: " + order.getIdOrder());
        int i = 1;
        order.setIdOrder(1);
        order.setOrderedTotalPrice(111);

        session.persist(order);
        transaction.commit();
        System.out.println("ORDERID after commit: " + order.getIdOrder());
        Transaction readTransaction = session.beginTransaction();
        Order readOrder = session.get(Order.class, order.getIdOrder());
        System.out.println("Read ORDER back: " + readOrder.toString());

        Items items = new Items();
        int ii = 1;
        order.setIdOrder(1);
        order.setOrderedTotalPrice(111);

        session.persist(items);
        transaction.commit();
        Order readItems = session.get(Items.class, items.getId()).getOrder();

        readTransaction.commit();
        session.close();
    }

    /*
    @org.junit.Test
    public void testCreate1Order(){
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Order order = new Order();
        order.setIdOrder(123);
        order.setOrderedTotalPrice(123);
        System.out.println("UserID before commit: " + order.getIdOrder());
        session.persist(order);
        transaction.commit();
        System.out.println("UserID after commit: " + order.getIdOrder());
        Transaction readTransaction = session.beginTransaction();
        Order readOrder = session.get(Order.class, order.getIdOrder());
        System.out.println("Read user back: " + readOrder.toString());
        readTransaction.commit();
        session.close();
    }
    @org.junit.Test
    public void testCreate1Items(){
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Items items = new Items();
        items.setIdOrder(123);
        items.setId("Food123");
        items.setMenu("Menu123");
        items.setPrice(123);
        items.setAmount(123);
        items.setStatus("Appending");
        System.out.println("UserID before commit: " + items.getIdOrder());
        session.persist(items);
        transaction.commit();
        System.out.println("UserID after commit: " + items.getIdOrder());
        Transaction readTransaction = session.beginTransaction();
        Items readItems = session.get(Items.class, items.getIdOrder());
        System.out.println("Read user back: " + readItems.toString());
        readTransaction.commit();
        session.close();
    }
*/

    //Unit testing for createCustomerData
    @org.junit.Test
    public void CustomerDataTest(){
        CustomerDataService customerDataService = new CustomerDataService();
        CustomerData customerData = new CustomerData();
        customerData.setEmail("unitTest@mail.com");
        customerData.setName("Unit Test");
        customerData.setNumber(12345678);
        customerDataService.createCustomerData(customerData);
    }

    @org.junit.Test
    public void testQuestion(){
        HibernateController hibernateController =
                new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Message message = new Message();
        System.out.println("Question ID before commit: " + message.getId());
        message.setEmail("test@mail.com");
        session.persist(message);
        transaction.commit();
        System.out.println("Question ID after commit: " + message.getId());
        Transaction readTransaction = session.beginTransaction();
        Message readMessage = session.get(Message.class, message.getId());
        System.out.println("Read quesiton back: " + readMessage.toString());
        readTransaction.commit();
        session.close();
    }

   /* @org.junit.Test
    public void createAdmin() {
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        LoginData user = new LoginData();
        user.setUsername("admin");
        user.setPassword(BCrypt.hashpw("password", "$2a$10$CwTycUXWue0Thq9StjUM0u"));
        session.persist(user);
        transaction.commit();
        session.close();
    }*/
   @org.junit.Test
   public void testLogin(){

       LoginData login = new LoginData();
       login.setUsername("not admin");
       login.setPassword("something wrong");

       LoginService service = new LoginService();

       try {
           String token = service.postLoginData(login);
           System.out.println(token);
           //if token given, the test fails
           assert false;
       }
       catch (NotAuthorizedException e){
           //we actually want to throw exception for wrong username/password
           assert true;
       }

   }

   //Test for checking if an order is being displayed in the orderTable at the admin page
    @org.junit.Test
    public void testFetchOrder(){
        HibernateController hibernateController =
                new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Items items = new Items();
        System.out.println(items.getIdOrder());
        session.persist(items);
        transaction.commit();
        session.close();
    }


}
