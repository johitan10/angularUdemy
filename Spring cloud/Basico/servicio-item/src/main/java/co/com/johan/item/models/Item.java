package co.com.johan.item.models;

import co.com.johan.commons.models.entity.Producto;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class Item {

	public Item(Producto producto, Integer cantidad) {
		this.producto = producto;
		this.cantidad = cantidad;
	}

	private Producto producto;

	private Integer cantidad;

	public Double getTotal() {
		return producto.getPrecio() * cantidad.doubleValue();
	}
	
}
