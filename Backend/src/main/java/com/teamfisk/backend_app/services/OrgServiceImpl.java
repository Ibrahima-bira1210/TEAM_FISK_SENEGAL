package com.teamfisk.backend_app.services;

import com.teamfisk.backend_app.entities.Organization;
import com.teamfisk.backend_app.repositories.OrgRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service("orgService")
@Transactional
public class OrgServiceImpl implements OrgService {
    private OrgRepository orgRepository;

    public OrgServiceImpl(OrgRepository orgRepository) {
        this.orgRepository = orgRepository;
    }

    @Override
    public Organization saveOrganization(Organization organization) {
        return orgRepository.save(organization);
    }

    @Override
    public Iterable<Organization> getAllOrganizations(Pageable pageable) {
        return orgRepository.findAll();
    }

    @Override
    public Optional<Organization> getOrganisation(String id) {
        return orgRepository.findById(id);
    }


}
