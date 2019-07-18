package co.com.johan.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.com.johan.commons.models.entity.Producto;
import co.com.johan.service.IProductoServicio;

@RestController
public class ProductoController {

	@Autowired
	private IProductoServicio productoServicio;

	@Autowired
	private Environment enviroment;

	@Value("${server.port}")
	private Integer port;
	
	@GetMapping("/listar")
	public List<Producto> listar() {
		return productoServicio.findAll()
				.stream()
				.map(prod -> {
					prod.setPort(port);
					return prod;
				})
				.collect(Collectors.toList());
	}

	@GetMapping("/detalle/{id}")
	public Producto obtenerPorId(@PathVariable("id") Long id) {
		Producto producto = productoServicio.findById(id);
		producto.setPort(port);		
		return producto;
	}
	
	@PostMapping("/crear")
	@ResponseStatus(HttpStatus.CREATED)
	public Producto guardar(@RequestBody Producto producto) {
		return productoServicio.save(producto);
	}
	
	@PutMapping("/actualizar/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Producto actualizar(@RequestBody Producto producto, @PathVariable Long id) {
		Producto productoModificar = productoServicio.findById(id);
		productoModificar.setNombre(producto.getNombre());
		productoModificar.setPrecio(producto.getPrecio());
		return productoServicio.save(productoModificar);
	}
	
	@DeleteMapping("/eliminar/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void eliminar(@PathVariable Long id) {
		productoServicio.deleteById(id);
	}
	
}
