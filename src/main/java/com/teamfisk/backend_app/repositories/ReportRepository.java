package com.teamfisk.backend_app.repositories;

import com.teamfisk.backend_app.entities.Report;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("reportRepository")
public interface ReportRepository extends JpaRepository<Report,String> {
    Page<Report> findByOrganizationId(String orgID, Pageable pageable);
}
