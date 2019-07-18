package co.com.johan.service;

import java.util.List;

import co.com.johan.commons.models.entity.Producto;

public interface IProductoServicio {

	public List<Producto> findAll();
	
	public Producto findById(Long id);	
	
	public Producto save(Producto producto);
	
	public void deleteById(Long id);
	
}
