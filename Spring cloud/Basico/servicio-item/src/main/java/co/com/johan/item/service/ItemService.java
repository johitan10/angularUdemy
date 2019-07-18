package co.com.johan.item.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import co.com.johan.commons.models.entity.Producto;
import co.com.johan.item.models.Item;

@Service
public class ItemService implements IItemService{

	@Autowired
	private RestTemplate restTemplate;
	
	@Override
	public List<Item> findAll() {
		List<Producto> productos = Arrays.asList(restTemplate.getForObject("http://servicio-productos/listar", Producto[].class));		
		return productos.stream().map(producto -> new Item(producto,1)).collect(Collectors.toList());
	}

	@Override
	public Item findById(Long id, Integer cantidad) {
		Map<String ,String> pathVariable = new HashMap<>();
		pathVariable.put("id", id.toString());
		Producto producto = restTemplate.getForObject("http://servicio-productos/detalle/{id}", Producto.class, pathVariable);
		return new Item(producto, cantidad);
	}

	@Override
	public Producto save(Producto producto) {
		HttpEntity<Producto> body = new HttpEntity<>(producto);
		ResponseEntity<Producto> prodCreado = restTemplate.exchange("http://servicio-productos/crear", HttpMethod.POST, body, Producto.class);
		return prodCreado.getBody();
	}

	@Override
	public Producto update(Producto producto, Long id) {
		HttpEntity<Producto> body = new HttpEntity<>(producto);
		Map<String ,String> pathVariable = new HashMap<>();
		pathVariable.put("id", id.toString());
		ResponseEntity<Producto> prodActualizado = restTemplate.exchange("http://servicio-productos/actualizar/{id}", HttpMethod.PUT, body, Producto.class, pathVariable);
		return prodActualizado.getBody();
	}

	@Override
	public void deleteById(Long id) {
		Map<String ,String> pathVariable = new HashMap<>();
		pathVariable.put("id", id.toString());
		restTemplate.delete("http://servicio-productos/eliminar/{id}", pathVariable);		
	}

}
