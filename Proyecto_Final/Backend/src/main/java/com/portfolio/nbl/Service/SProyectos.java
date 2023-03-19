
package com.portfolio.nbl.Service;

import com.portfolio.nbl.Entity.Proyectos;
import com.portfolio.nbl.Repository.RProyecto;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SProyectos {
@Autowired RProyecto rProyecto;

 public List<Proyectos> list(){
         return rProyecto.findAll();
     }
     
     public Optional<Proyectos> getOne(int id){
         return rProyecto.findById(id);
     }
     
     public Optional<Proyectos> getByNombreP(String nombreP){
         return rProyecto.findByNombreP(nombreP);
     }
     
     public void save(Proyectos proyectos){
         rProyecto.save(proyectos);
     }
     
     public void delete(int id){
         rProyecto.deleteById(id);
     }
     
     public boolean existsById(int id){
         return rProyecto.existsById(id);
     }
     
     public boolean existsByNombreP(String nombreP){
         return rProyecto.existsByNombreP(nombreP);
     }
}

