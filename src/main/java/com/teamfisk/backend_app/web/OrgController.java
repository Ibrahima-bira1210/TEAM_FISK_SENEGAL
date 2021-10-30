package com.teamfisk.backend_app.web;

import com.teamfisk.backend_app.entities.Organization;
import com.teamfisk.backend_app.helpers.ZXingHelper;
import com.teamfisk.backend_app.services.OrgService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("api/v1/org")
public class OrgController {
    private OrgService orgRepository;

    public OrgController(OrgService orgRepository) {
        this.orgRepository = orgRepository;
    }

    @PostMapping
    public ResponseEntity<Organization> saveOrganization(@RequestBody Organization organization){
        Organization saveOrganization = orgRepository.saveOrganization(organization);
        saveOrganization.setQrCode(ZXingHelper.getQRCodeImage(saveOrganization.getId(), 200,200));
        return ResponseEntity.status(HttpStatus.OK).body(organization);
    }
}
