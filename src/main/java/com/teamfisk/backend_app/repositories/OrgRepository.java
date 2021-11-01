package com.teamfisk.backend_app.repositories;

import com.teamfisk.backend_app.entities.Organization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrgRepository extends JpaRepository<Organization,String> {
    List<Organization> findByName(String name);
    List<Organization> findBySecteur(String secteur);
    List<Organization> findByRegion(String region);
}
