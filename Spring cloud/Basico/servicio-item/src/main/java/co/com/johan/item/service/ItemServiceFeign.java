package co.com.johan.item.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import co.com.johan.commons.models.entity.Producto;
import co.com.johan.item.clientes.IProductoClienteRest;
import co.com.johan.item.models.Item;

@Service	
@Primary
public class ItemServiceFeign implements IItemService {

	@Autowired
	private IProductoClienteRest feignClientProducto;

	@Override
	public List<Item> findAll() {
		return feignClientProducto.obtenerProductos().stream().map(producto -> new Item(producto, 1))
				.collect(Collectors.toList());
	}

	@Override
	public Item findById(Long id, Integer cantidad) {
		return new Item(feignClientProducto.obtenerPorId(id), cantidad);
	}

	@Override
	public Producto save(Producto producto) {
		return feignClientProducto.guardar(producto);
	}

	@Override
	public Producto update(Producto producto, Long id) {
		return feignClientProducto.actualizar(producto, id);
	}

	@Override
	public void deleteById(Long id) {
		feignClientProducto.eliminar(id);
	}

}
