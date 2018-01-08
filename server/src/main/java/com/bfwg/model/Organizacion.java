package com.bfwg.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="organizacion")
public class Organizacion implements Serializable{

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "descripcion")
    private String descripsion;

    @Column(name = "usuario_creador")
    private Long usuario_creador;

    @Column(name = "fecha_creacion")
    @Temporal(TemporalType.DATE)
    private String fecha_creacion;

    @Column(name = "usuario_modificacion")
    private Long usuario_modificacion;

    @Column(name = "fecha_modificacion")
    @Temporal(TemporalType.DATE)
    private String fecha_modificacion;

    public Organizacion() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripsion() {
        return descripsion;
    }

    public void setDescripsion(String descripsion) {
        this.descripsion = descripsion;
    }

    public Long getUsuario_creador() {
        return usuario_creador;
    }

    public void setUsuario_creador(Long usuario_creador) {
        this.usuario_creador = usuario_creador;
    }

    public String getFecha_creacion() {
        return fecha_creacion;
    }

    public void setFecha_creacion(String fecha_creacion) {
        this.fecha_creacion = fecha_creacion;
    }

    public Long getUsuario_modificacion() {
        return usuario_modificacion;
    }

    public void setUsuario_modificacion(Long usuario_modificacion) {
        this.usuario_modificacion = usuario_modificacion;
    }

    public String getFecha_modificacion() {
        return fecha_modificacion;
    }

    public void setFecha_modificacion(String fecha_modificacion) {
        this.fecha_modificacion = fecha_modificacion;
    }

    @Override
    public String toString() {
        return "Organizacion{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", descripsion='" + descripsion + '\'' +
                ", usuario_creador=" + usuario_creador +
                ", fecha_creacion='" + fecha_creacion + '\'' +
                ", usuario_modificacion=" + usuario_modificacion +
                ", fecha_modificacion='" + fecha_modificacion + '\'' +
                '}';
    }
}
