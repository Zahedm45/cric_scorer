package dal;

import model.PaymentDB;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import service.payment.Payment;
import utility.GlobalVariable;

public class PaymentDal {
/*    private String customerId;

    public PaymentDal(String customerId) {
        this.customerId = customerId;
    }*/


    public void createCheckoutDB(Payment payment, boolean status){
        String HOST = GlobalVariable.HOST;
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();

        PaymentDB paymentDB = new PaymentDB();
        paymentDB.setName(payment.name);
        paymentDB.setEmail(payment.email);
        paymentDB.setCustomerId(payment.customerId);
        paymentDB.setTokenId(payment.tokenId);
        paymentDB.setAmount(payment.amount);
        paymentDB.setPaymentSuccess(""+status);

        session.persist(paymentDB);
        transaction.commit();
        session.close();

    }

    public void setPaymentSuccessDB(String customerId, boolean status) {

        String HOST = GlobalVariable.HOST;
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction readTransaction = session.beginTransaction();

        PaymentDB readPaymentDB = session.get(PaymentDB.class,  customerId);
        readPaymentDB.setPaymentSuccess("" + status);
        session.update(readPaymentDB);
        readTransaction.commit();
        session.close();

    }
}


