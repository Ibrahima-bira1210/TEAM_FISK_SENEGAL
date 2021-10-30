package com.teamfisk.backend_app.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity
@Table(name = "ORGANIZATION")
public class Organization {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid",strategy = "uuid2")
    private String id;
    private String name;
    private String email;
    private long tel;
    private String boitePostal;

    @Enumerated(EnumType.STRING)
    private Secteur secteur;
    private double longitude;
    private double latitude;
    @Lob
    private byte[] qrCode;
}
