package com.teamfisk.backend_app.services;

import com.teamfisk.backend_app.entities.Report;
import com.teamfisk.backend_app.entities.ReportFile;
import com.teamfisk.backend_app.repositories.ReportFileRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.stream.Stream;

@Service("reportFileService")
@Transactional
public class ReportFileServiceImpl implements ReportFileService{
    private ReportFileRepository fileRepository;

    public ReportFileServiceImpl(ReportFileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    @Override
    public ReportFile store(MultipartFile file, Report report) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        ReportFile reportFile = new ReportFile(fileName,file.getContentType(),file.getBytes());
        reportFile.setReport(report);
        return fileRepository.save(reportFile);
    }

    @Override
    public ReportFile getReportFile(String id) {
        return fileRepository.findById(id).get();
    }

    @Override
    public Stream<ReportFile> getAllReportsFiles() {
        return fileRepository.findAll().stream();
    }
}
