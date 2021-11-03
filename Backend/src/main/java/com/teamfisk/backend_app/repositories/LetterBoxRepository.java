package com.teamfisk.backend_app.repositories;

import com.teamfisk.backend_app.entities.LetterBox;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LetterBoxRepository extends JpaRepository<LetterBox,String> {
    Page<LetterBox> findByOrganizationId(String orgID, Pageable pageable);

}
