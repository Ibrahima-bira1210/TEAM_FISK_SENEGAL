package com.teamfisk.backend_app.services;

import com.teamfisk.backend_app.entities.Organization;
import com.teamfisk.backend_app.repositories.OrgRepository;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
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

    @Override
    public List<Organization> filter(String name, String secteur, String region) {
        Organization org=new Organization();
        String[] ignoredFields={"tel","longitude","latitude","qrCode"};
        org.setName(name.equals("")?null:name);
        org.setSecteur(secteur.equals("")?null:secteur);
        org.setRegion(region.equals("")?null:region);

        ExampleMatcher matcher=ExampleMatcher
                    .matching()
                    .withIgnorePaths(ignoredFields)
                    .withIgnoreNullValues()
                    .withIgnoreCase();

        Example<Organization> example= Example.of(org,matcher);

        return orgRepository.findAll(example);
    }


}
