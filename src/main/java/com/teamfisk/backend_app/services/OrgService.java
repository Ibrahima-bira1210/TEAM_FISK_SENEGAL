package com.teamfisk.backend_app.services;

import com.teamfisk.backend_app.entities.Organization;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface OrgService {
    public Iterable<Organization> getAllOrganizations(Pageable pageable);
    public Organization saveOrganization(Organization organization);
    public Optional<Organization> getOrganisation(String id);

    List<Organization> filter(String name, String secteur, String region);

}
