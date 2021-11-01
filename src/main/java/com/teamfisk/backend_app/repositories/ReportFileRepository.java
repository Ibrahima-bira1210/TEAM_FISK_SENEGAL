package com.teamfisk.backend_app.repositories;

import com.teamfisk.backend_app.entities.ReportFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("reportFileRepository")
public interface ReportFileRepository extends JpaRepository<ReportFile,String> {
}
