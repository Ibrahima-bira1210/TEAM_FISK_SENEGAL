package com.teamfisk.backend_app.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

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
    private String secteur;
    private double longitude;
    private double latitude;
    @Lob
    private byte[] qrCode;
    private double rate = 100.0;

    @OneToMany(mappedBy = "organization", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Report> reports = new HashSet<>();

    @OneToMany(mappedBy = "organization",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<LetterBox> letters = new HashSet<>();
}
