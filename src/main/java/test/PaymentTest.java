package test;

import dal.HibernateController;
import dal.PaymentDal;
import model.PaymentDB;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.junit.Test;
import service.payment.Payment;
import utility.GlobalVariable;
//import org.junit.jupiter.api.Test;

import static org.testng.AssertJUnit.*;

public class PaymentTest {
    Payment payment;
    PaymentDal paymentDal;

    public PaymentTest() {
        //String id = "" + Math.random();

        String id = "" + Math.random();

        paymentDal = new PaymentDal();
        payment = new Payment();
        payment.customerId  = id;
        payment.amount = 20;
        payment.email = "zeeeeee45@gmail.com";
        payment.tokenId = "myTockenId";
        payment.name = "Customer Name";

    }

    @Test
    public void setPaymentStatusDBTest(){
        paymentDal.createCheckoutDB(payment, true);

        String HOST = GlobalVariable.HOST;
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        PaymentDB paymentDB = session.get(PaymentDB.class, payment.customerId);

        assertEquals(payment.name, paymentDB.getName());
        assertEquals(payment.email, paymentDB.getEmail());
        assertEquals(payment.customerId, paymentDB.getCustomerId());

        assertEquals(paymentDB.getPaymentSuccess(), "true");
        session.close();

    }

}
