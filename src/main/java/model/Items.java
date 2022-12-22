package model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

@Entity
@Getter
@Setter
@Builder
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Table(name="DBItems") //!!WATCH out this is a reserved name!
public class Items {

    @Id
    @GeneratedValue
    @Column(name="idOrder")
    private int idOrder;

    @Column(name="id")
    @NotNull
    private String id;

    @Column(name="menu")
    @NotNull
    private String menu;

    @Column(name="price")
    @NotNull
    private double price;

    @Column(name="amount")
    @NotNull
    private int amount;

    @Column(name="status")
    @NotNull
    private String status;

    @ManyToOne(targetEntity = Order.class, cascade=CascadeType.ALL)
    @JoinColumn()
    @JsonIgnore
    private Order order;
}

