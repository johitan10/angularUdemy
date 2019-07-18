package co.com.johan.item.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

import co.com.johan.commons.models.entity.Producto;
import co.com.johan.item.models.Item;
import co.com.johan.item.service.IItemService;

@RefreshScope
@RestController
public class ItemController {

	@Autowired
	private Environment env;

	@Autowired
//	@Qualifier("itemService")
	private IItemService itemService;

	@GetMapping("/listar")
	public List<Item> listar() {
		return itemService.findAll();
	}

	@HystrixCommand(fallbackMethod = "metodoAlternativo")
	@GetMapping("/detalle/{id}/cantidad/{cantidad}")
	public Item detalle(@PathVariable Long id, @PathVariable Integer cantidad) {
		return itemService.findById(id, cantidad);
	}

	public Item metodoAlternativo(Long id, Integer cantidad) {
		Item item = new Item();
		item.setCantidad(cantidad);
		Producto producto = new Producto();
		producto.setId(id);
		producto.setNombre("Error");
		producto.setPrecio(1500D);
		item.setProducto(producto);
		return item;
	}

	@PostMapping("/crear")
	@ResponseStatus(HttpStatus.CREATED)
	public Producto guardar(@RequestBody Producto producto) {
		return itemService.save(producto);
	}

	@PutMapping("/actualizar/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Producto actualizar(@RequestBody Producto producto, @PathVariable Long id) {
		return itemService.update(producto, id);
	}

	@DeleteMapping("/eliminar/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void eliminar(@PathVariable Long id) {
		itemService.deleteById(id);
	}

	@GetMapping("/parametros")
	public ResponseEntity<?> parametros(@Value("${server.port}") String puerto,
			@Value("${configuracion.texto}") String texto) {
		Map<String, String> json = new HashMap<>();
		json.put("texto", texto);
		json.put("puerto", puerto);
		if (env.getActiveProfiles().length > 0) {
			if (env.getActiveProfiles()[0].equals("dev")) {
				json.put("nombre", env.getProperty("configuracion.autor.nombre"));
				json.put("email", env.getProperty("configuracion.autor.email"));
			}
		}

		return new ResponseEntity<Map<String, String>>(json, HttpStatus.OK);
	}

}
