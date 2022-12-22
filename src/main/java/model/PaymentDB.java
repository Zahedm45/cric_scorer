package model;

import jakarta.persistence.*;
import lombok.*;
@Entity
@Table(name="payment")
@Getter
@Setter
@Builder
@ToString
@RequiredArgsConstructor
@AllArgsConstructor

public class PaymentDB {
    @Id
    @Column
    private String customerId;
    @Column
    private String email;
    @Column
    private String name;
    @Column
    private String tokenId;
    @Column
    private int amount;
    @Column
    private String paymentSuccess;

/*    public Customer(String customerId, String email, String name, String tokenId, int amount, boolean paymentSuccess) {

    }*/
}


