package com.teamfisk.backend_app.web;

import com.teamfisk.backend_app.entities.Organization;
import com.teamfisk.backend_app.entities.Report;
import com.teamfisk.backend_app.entities.ReportFile;
import com.teamfisk.backend_app.repositories.ReportRepository;
import com.teamfisk.backend_app.services.OrgService;
import com.teamfisk.backend_app.services.ReportFileService;
import com.teamfisk.backend_app.services.ReportService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/reports")
public class ReportController {
    private ReportService reportService;
    private OrgService orgService;
    private ReportFileService reportFileService;
    private ReportRepository reportRepository;

    public ReportController(ReportService reportService, OrgService orgService, ReportRepository reportRepository,
                            ReportFileService reportFileService) {
        this.reportService = reportService;
        this.orgService = orgService;
        this.reportRepository = reportRepository;
        this.reportFileService=reportFileService;
    }

    //************************ Save a Report ****************************************

    @PostMapping("/{orgId}")
    public ResponseEntity<Report> create(@PathVariable(value = "orgId") String orgId, @RequestParam("file") MultipartFile file,
                                         @ModelAttribute Report report){
        Optional<Organization> organization = orgService.getOrganisation(orgId);
        if(!organization.isPresent()){
            return ResponseEntity.unprocessableEntity().build();
        }
        report.setOrganization(organization.get());
        Report savedReport = reportRepository.save(report);
        String message="";
        try {
            ReportFile reportFile = reportFileService.store(file,report);
            message = "Upload the file successfully " + file.getOriginalFilename();
            savedReport.getReportFiles().add(reportFile);
            savedReport.setUploadMessage(message);
            System.out.println(message);
            return ResponseEntity.status(HttpStatus.OK).body(savedReport);
        }catch (Exception e){
            message = "Could not Upload the file " + file.getOriginalFilename() + "!";
            System.out.println(message);
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(savedReport);
        }

    }

    //************************ Get All Report  ****************************************

    @GetMapping
    public ResponseEntity<Page<Report>> getAllReport(Pageable pageable){
        return ResponseEntity.status(HttpStatus.OK).body(reportRepository.findAll(pageable));
    }

    //************************ Get Report By ID  ****************************************

    @GetMapping("/{id}")
    public ResponseEntity<Report> getReportByID(@PathVariable String id){
        Optional<Report> optionalReport = reportRepository.findById(id);
        if(!optionalReport.isPresent()){
            return ResponseEntity.unprocessableEntity().build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(optionalReport.get());
    }

    //************************ Get Reports By organizationID  ****************************************

    @GetMapping("/organization/{orgId}")
    public ResponseEntity<Page<Report>> getAllReportByorg(@PathVariable String orgId,Pageable pageable){
        return ResponseEntity.status(HttpStatus.OK).body(reportRepository.findByOrganizationId(orgId,pageable));
    }

}
