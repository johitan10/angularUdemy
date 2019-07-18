package co.com.johan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import co.com.johan.commons.models.entity.Producto;

public interface ProductoDAO extends JpaRepository<Producto, Long> {

}
