
package com.portfolio.nbl.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity 
public class Proyectos {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private int id;
    
    @NotNull
    @Size(min = 1, max = 50, message = "no cumple con el mínimo de caracteres")
    private String nombreP;
    
    /*@NotNull
    @Size(min = 1, max = 50, message = "no cumple con el mínimo de caracteres")
    private String apellido;*/
    
    @NotNull
    private String descripcionP;
    
    private String img;

    public Proyectos() {
    }

    public Proyectos(String nombreP, String descripcionP, String img) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.img = img;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreP() {
        return nombreP;
    }

    public void setNombreP(String nombreP) {
        this.nombreP = nombreP;
    }

    public String getDescripcionP() {
        return descripcionP;
    }

    public void setDescripcionP(String descripcionP) {
        this.descripcionP = descripcionP;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
    
    
    
}
