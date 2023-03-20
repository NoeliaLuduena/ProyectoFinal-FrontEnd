/*
Resuelve el: “No hay un encabezado 'Access-Control-Allow-Origin' presente en el recurso
solicitado” 
 */

package com.portfolio.nbl;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@EnableWebMvc
@Configuration
public class WebConfig  implements WebMvcConfigurer{
    
@Override
 public void addCorsMappings(CorsRegistry registry) {
 registry.addMapping("/**");
 }

}
