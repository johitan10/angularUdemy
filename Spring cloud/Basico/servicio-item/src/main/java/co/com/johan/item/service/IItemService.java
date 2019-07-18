package co.com.johan.item.service;

import java.util.List;

import co.com.johan.commons.models.entity.Producto;
import co.com.johan.item.models.Item;

public interface IItemService {

	public List<Item> findAll();
	
	public Item findById(Long id, Integer cantidad);
	
	public Producto save(Producto producto);
	
	public Producto update(Producto producto, Long id);
	
	public void deleteById(Long id);
	
}
