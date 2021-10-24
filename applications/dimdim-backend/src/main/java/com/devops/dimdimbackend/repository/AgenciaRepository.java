package com.devops.dimdimbackend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.devops.dimdimbackend.model.Agencia;

public interface AgenciaRepository extends JpaRepository<Agencia, Long> {
    List<Agencia> findByPublished(boolean published);
    List<Agencia> findByNomeContaining(String nome);
}
