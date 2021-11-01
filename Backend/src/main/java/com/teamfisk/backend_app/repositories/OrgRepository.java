package com.teamfisk.backend_app.repositories;

import com.teamfisk.backend_app.entities.Organization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("orgRepository")
public interface OrgRepository extends JpaRepository<Organization,String> {
}
