package co.com.springboot.jpa.app.model.dao;

import java.util.List;

import co.com.springboot.jpa.app.model.entity.Cliente;

public interface IClienteDAO {

	public List<Cliente> findAll();
	
	public void save(Cliente cliente);
	
	public Cliente findById(Long id);
	
	public void eliminar(Cliente cliente);
}
