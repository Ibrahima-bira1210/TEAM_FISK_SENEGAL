package com.teamfisk.backend_app.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.*;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "REPORT")
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter
public class Report {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid",strategy = "uuid2")
    private String id;
    @Lob
    private String moreInfo;
    private String corruptionType;


    @JsonManagedReference
    @OneToMany(mappedBy = "report",fetch = FetchType.LAZY)
    @Fetch(value = FetchMode.JOIN)
    private Set<ReportFile> reportFiles = new HashSet<>();


    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "organization_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Organization organization;

    @Transient
    private String uploadMessage;

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }

}
