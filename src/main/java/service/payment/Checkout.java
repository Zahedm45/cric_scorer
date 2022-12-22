package service.payment;


import com.stripe.Stripe;
import com.stripe.exception.*;
import com.stripe.model.Charge;
import dal.PaymentDal;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.HashMap;
import java.util.Map;



@Path("stripe")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class Checkout {
    public Checkout() {}

    @POST
    @Path(("pay"))
    public Response submitPayment(Payment payment) {
        boolean status = false;
        Stripe.apiKey = System.getenv( "MY_SECRET_KEY");
        Map<String, Object> params = new HashMap<>();
        params.put("amount", payment.amount * 100);
        params.put("currency", "dkk");
        params.put("description", "Example charge");
        params.put("source", payment.tokenId);
        try {
            Charge.create(params);
            System.out.println("Payment success.");
            status = true;
        } catch (AuthenticationException e) {
            System.out.println("Authentication exception.");
            e.printStackTrace();
        } catch (InvalidRequestException e) {
            System.out.println("Invalid Request exception.");
            e.printStackTrace();
        } catch (CardException e) {
            System.out.println("Card exception");
            e.printStackTrace();
        } catch (StripeException e) {
            System.out.println("Stripe Exception");
            e.printStackTrace();
        }
        PaymentDal paymentDal = new PaymentDal();
        if (status) {
            paymentDal.createCheckoutDB(payment, status);
            return Response.ok().build();
        }

        return Response.serverError().build();
    }

}
