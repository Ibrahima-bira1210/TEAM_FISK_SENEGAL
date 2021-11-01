package com.teamfisk.backend_app.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "REPORT_FILE")
@NoArgsConstructor @AllArgsConstructor @Getter @Setter
public class ReportFile {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid",strategy = "uuid2")
    private String id;
    private String name;
    private String type;
    @Lob
    private byte[] data;

    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "report_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JsonBackReference
    private Report report;

    public ReportFile(String name, String type, byte[] data) {
        this.name = name;
        this.type = type;
        this.data = data;
    }
}
