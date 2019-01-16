package co.com.udemy.spring.thymeleaf.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class indexController {

	@Value("${application.properties.mensaje}")
	private String mensaje;
	
	@GetMapping("/")
	public String hola(Model model) {
		model.addAttribute("mensaje", this.mensaje);
		return "hola";
	}

}
