package model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data

@Table(name = "message") //WATCH out  USER is a reserved name!

@Getter
@Setter
@Builder
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class Message {
    @Id
    @GeneratedValue
    @Column
    private int id;
    @Column
    private String email;
    @Column
    private String message;
}
