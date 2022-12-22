package model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Data
@Table(name = "AdUser") //WATCH out  USER is a reserved name!
@Getter
@Setter
//@Builder
@ToString
@NoArgsConstructor
public class AdminUser {

    @Column
    private String username;
    @Column
    private String password;
    @Id
    private Integer id;
}
