package co.com.johan.item.clientes;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import co.com.johan.commons.models.entity.Producto;

@FeignClient(name="servicio-productos")
public interface IProductoClienteRest {

	@GetMapping("/listar")
	public List<Producto> obtenerProductos();
	
	@GetMapping("/detalle/{id}")
	public Producto obtenerPorId(@PathVariable("id") Long id);
	
	@PostMapping("/crear")
	public Producto guardar(@RequestBody Producto producto);
	
	@PutMapping("/actualizar/{id}")
	public Producto actualizar(@RequestBody Producto producto, @PathVariable Long id);
	
	@DeleteMapping("/eliminar/{id}")
	public void eliminar(@PathVariable Long id);
}
