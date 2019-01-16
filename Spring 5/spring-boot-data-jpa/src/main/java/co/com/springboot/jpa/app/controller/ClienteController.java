package co.com.springboot.jpa.app.controller;

import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import co.com.springboot.jpa.app.model.dao.IClienteDAO;
import co.com.springboot.jpa.app.model.entity.Cliente;

@Controller
@SessionAttributes("cliente")
public class ClienteController {

	@Autowired
	@Qualifier("clienteDAOJPA")
	private IClienteDAO iClienteDAO;
	
	@RequestMapping(value="/listar", method = RequestMethod.GET)
	public String listarClientes(Model model) {
		model.addAttribute("titulo", "Listado de clientes");
		model.addAttribute("clientes", iClienteDAO.findAll());
		return "lista";
	}
	
	@RequestMapping(value="/form", method = RequestMethod.GET)
	public String crear(Map<String, Object> model) {
		Cliente cliente = new Cliente();	
		model.put("titulo", "Formulario de cliente");
		model.put("cliente", cliente);
		return "form";
	}
	
	@RequestMapping(value="/form", method = RequestMethod.POST)
	public String guardar(@Valid Cliente cliente, BindingResult result, SessionStatus status) {
		if (result.hasErrors()) {
			return "form";
		}
		iClienteDAO.save(cliente);		
		status.setComplete();
		return "redirect:listar";
	}
	
	@RequestMapping(value="/form/{id}", method = RequestMethod.GET)
	public String editar(@PathVariable(value="id") Long id, Map<String, Object> model) {
		Cliente cliente = null;
		if (id != null) {
			cliente = iClienteDAO.findById(id);
		} else {
			return "redirect:/listar";
		}
		model.put("titulo", "Editar cliente");
		model.put("cliente", cliente);
		return "form";
	}
	
}
