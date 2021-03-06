package com.teamfisk.backend_app.web;

import com.teamfisk.backend_app.entities.Localisation;
import com.teamfisk.backend_app.entities.Organization;
import com.teamfisk.backend_app.helpers.ZXingHelper;
import com.teamfisk.backend_app.repositories.OrgRepository;
import com.teamfisk.backend_app.services.OrgService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("api/org")
public class OrgController {
    private OrgService orgService;
    private OrgRepository orgRepository;

    public OrgController(OrgService orgService, OrgRepository orgRepository) {
        this.orgService = orgService;
        this.orgRepository = orgRepository;
    }

    //************************ Save an Organization ****************************************

    @PostMapping
    public ResponseEntity<Organization> saveOrganization(@RequestBody Organization organization){
        Organization saveOrganization = orgService.saveOrganization(organization);
        saveOrganization.setQrCode(ZXingHelper.getQRCodeImage(saveOrganization.getId(), 200,200));
        orgService.saveOrganization(saveOrganization);
        return ResponseEntity.status(HttpStatus.OK).body(saveOrganization);
    }

    //************************ get an Organization by ID ****************************************

    @GetMapping("/{id}")
    public ResponseEntity<Organization> getOrganisationById(@PathVariable String id) {
        Optional<Organization> optionalOrganization = orgService.getOrganisation(id);
        if(!optionalOrganization.isPresent()){
            return ResponseEntity.unprocessableEntity().build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(optionalOrganization.get());
    }

    //************************ get All Organization ****************************************

    @GetMapping
    public ResponseEntity<Page<Organization>> getAllOrganizations(Pageable pageable){
        return ResponseEntity.status(HttpStatus.OK).body(orgRepository.findAll(pageable));
    }

    //************************ Get Organization Localisation ****************************************
    @GetMapping("localization")
    public ResponseEntity<List<Localisation>> getOrgLocalisation(){
        List<Organization> organizations  = orgRepository.findAll();
        List<Localisation> localisations = new ArrayList<>();
        organizations.forEach( organization -> {
            Localisation localization = new Localisation();
            localization.setLat(organization.getLatitude());
            localization.setLng(organization.getLongitude());
            if(organization.getRate() < 70 && organization.getRate() > 50){
                localization.setColor("orange");
            }else if (organization.getRate() < 50 ) {
                localization.setColor("rouge");
            }
            else{
                localization.setColor("bleu");
            }
            localisations.add(localization);

        });
        return ResponseEntity.status(HttpStatus.OK).body(localisations);
    }


    //************************ Update Organization ****************************************

    @PutMapping("/{id}")
    public ResponseEntity<Organization> updateOrganization(@PathVariable String id, @RequestBody Organization organization){
        Optional<Organization> optionalOrganization = orgService.getOrganisation(id);
        if(!optionalOrganization.isPresent()){
            return ResponseEntity.unprocessableEntity().build();
        }
        organization.setId(optionalOrganization.get().getId());
        orgService.saveOrganization(organization);
        return ResponseEntity.status(HttpStatus.OK).body(organization);
    }

    //************************ Delete Organization ****************************************


    @DeleteMapping("/{id}")
    public ResponseEntity<Organization> deleteOrganization(@PathVariable String id){
        Optional<Organization> optionalOrganization = orgService.getOrganisation(id);
        if(!optionalOrganization.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        orgRepository.delete(optionalOrganization.get());
        return ResponseEntity.status(HttpStatus.OK).body(optionalOrganization.get());
    }


}
