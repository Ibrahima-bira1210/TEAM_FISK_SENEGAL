package com.teamfisk.backend_app.services;

import com.teamfisk.backend_app.entities.Report;
import com.teamfisk.backend_app.entities.ReportFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.stream.Stream;

public interface ReportFileService {
    ReportFile store(MultipartFile file, Report report) throws IOException;
    ReportFile getReportFile(String id);
    Stream<ReportFile> getAllReportsFiles();
}
