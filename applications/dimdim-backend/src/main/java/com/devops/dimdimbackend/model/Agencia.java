package com.devops.dimdimbackend.model;

import javax.persistence.*;

@Entity
@Table(name = "agencias")
public class Agencia {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "endereco")
    private String endereco;

    @Column(name = "published")
    private boolean published;

    public Agencia(){

    }

    public Agencia(String nome, String endereco, boolean published) {
        this.nome = nome;
        this.endereco = endereco;
        this.published = published;
    }

    public long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public boolean ispublished() {
        return published;
    }

    public void setpublished(boolean ispublished) {
        this.published = ispublished;
    }

    @Override
    public String toString() {
        return "Agencia [id=" + id + ", nome=" + nome + ", endereço=" + endereco + ", published=" + published + "]";
    }
}
