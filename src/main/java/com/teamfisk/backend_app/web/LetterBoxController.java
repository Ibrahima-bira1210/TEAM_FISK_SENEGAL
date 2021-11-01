package com.teamfisk.backend_app.web;

import com.teamfisk.backend_app.entities.LetterBox;
import com.teamfisk.backend_app.entities.Organization;
import com.teamfisk.backend_app.repositories.LetterBoxRepository;
import com.teamfisk.backend_app.services.OrgService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("api/letterbox")
public class LetterBoxController {
    private LetterBoxRepository letterBoxRepository;
    private OrgService orgService;

    public LetterBoxController(LetterBoxRepository letterBoxRepository, OrgService orgService) {
        this.letterBoxRepository = letterBoxRepository;
        this.orgService = orgService;
    }

    //************************ Save a letter Box ****************************************

    @PostMapping("/{orgId}")
    public ResponseEntity<LetterBox> create(@PathVariable String orgId, @RequestBody LetterBox letterBox){
        Optional<Organization> organization = orgService.getOrganisation(orgId);
        if(!organization.isPresent()){
            return ResponseEntity.unprocessableEntity().build();
        }
        letterBox.setOrganization(organization.get());
        LetterBox savedLetterBox = letterBoxRepository.save(letterBox);
        return ResponseEntity.status(HttpStatus.OK).body(savedLetterBox);
    }

    //************************ Get letter Box by Organisation ID ****************************************

    @GetMapping("/organization/{orgId}")
    public ResponseEntity<Page<LetterBox>> getOrgLetterBox(@PathVariable String orgId, Pageable pageable){
        return ResponseEntity.status(HttpStatus.OK).body(letterBoxRepository.findByOrganizationId(orgId,pageable));
    }

    //************************ Get letter Box by ID ****************************************

    @GetMapping("/{id}")
    public ResponseEntity<LetterBox> getLetterBoxById(@PathVariable String id){
        Optional<LetterBox> optionalLetterBox = letterBoxRepository.findById(id);
        if(!optionalLetterBox.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(optionalLetterBox.get());
    }


}
