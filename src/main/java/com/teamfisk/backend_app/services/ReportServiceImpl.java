package com.teamfisk.backend_app.services;

import com.teamfisk.backend_app.entities.Organization;
import com.teamfisk.backend_app.entities.Report;
import com.teamfisk.backend_app.repositories.OrgRepository;
import com.teamfisk.backend_app.repositories.ReportRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service("reportService")
@Transactional
public class ReportServiceImpl implements ReportService{
    private ReportRepository reportRepository;
    private OrgRepository orgRepository;

    public ReportServiceImpl(ReportRepository reportRepository,OrgRepository orgRepository) {
        this.reportRepository = reportRepository;
        this.orgRepository = orgRepository;
    }

    @Override
    public Report savedReport(Report report) {
        Optional<Organization> optionalOrganization = orgRepository.findById(report.getOrganization().getId());
        /*
        if (!optionalOrganization.isPresent()){
            return ResponseEntity.unprocessableEntity().build();
        }*/
        report.setOrganization(optionalOrganization.get());
        return reportRepository.save(report);
    }

}
