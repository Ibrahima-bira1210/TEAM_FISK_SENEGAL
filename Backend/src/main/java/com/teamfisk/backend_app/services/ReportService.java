package com.teamfisk.backend_app.services;

import com.teamfisk.backend_app.entities.Report;


import java.util.List;
import java.util.Optional;


public interface ReportService {
    Report savedReport(Report report);
}
