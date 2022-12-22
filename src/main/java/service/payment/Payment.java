package service.payment;

import lombok.Data;

@Data
public class Payment {
    public String email, name, customerId, tokenId;
    public int amount;

}
