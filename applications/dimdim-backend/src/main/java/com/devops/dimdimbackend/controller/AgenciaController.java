package com.devops.dimdimbackend.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devops.dimdimbackend.model.Agencia;
import com.devops.dimdimbackend.repository.AgenciaRepository;

//@CrossOrigin(origins = "http://dimdim-frontend:8081")
@RestController
@RequestMapping("/api")
public class AgenciaController {

    @Autowired
    AgenciaRepository agenciaRepository;

    @GetMapping("/agencias")
    public ResponseEntity<List<Agencia>> getAllAgencias(@RequestParam(required = false) String nome) {
        try {
            List<Agencia> agencias = new ArrayList<Agencia>();

            if (nome == null)
                agenciaRepository.findAll().forEach(agencias::add);
            else
                agenciaRepository.findByNomeContaining(nome).forEach(agencias::add);

            if (agencias.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(agencias, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/agencias/{id}")
    public ResponseEntity<Agencia> getAgenciaById(@PathVariable("id") long id) {
        Optional<Agencia> agenciaData = agenciaRepository.findById(id);

        if (agenciaData.isPresent()) {
            return new ResponseEntity<>(agenciaData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/agencias")
    public ResponseEntity<Agencia> createAgencia(@RequestBody Agencia agencia) {
        try {
            Agencia _agencia = agenciaRepository
                    .save(new Agencia(agencia.getNome(), agencia.getEndereco(), false));
            return new ResponseEntity<>(_agencia, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/agencias/{id}")
    public ResponseEntity<Agencia> updateAgencia(@PathVariable("id") long id, @RequestBody Agencia agencia) {
        Optional<Agencia> agenciaData = agenciaRepository.findById(id);

        if (agenciaData.isPresent()) {
            Agencia _agencia = agenciaData.get();
            _agencia.setNome(agencia.getNome());
            _agencia.setEndereco(agencia.getEndereco());
            _agencia.setpublished(agencia.ispublished());
            return new ResponseEntity<>(agenciaRepository.save(_agencia), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/agencias/{id}")
    public ResponseEntity<HttpStatus> deleteAgencia(@PathVariable("id") long id) {
        try {
            agenciaRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/agencias")
    public ResponseEntity<HttpStatus> deleteAllAgencias() {
        try {
            agenciaRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/agencias/published")
    public ResponseEntity<List<Agencia>> findByPublished() {
        try {
            List<Agencia> agencias = agenciaRepository.findByPublished(true);

            if (agencias.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(agencias, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
