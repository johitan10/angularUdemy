package co.com.springboot.jpa.app.model.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import co.com.springboot.jpa.app.model.entity.Cliente;

@Repository("clienteDAOJPA")
public class ClienteDAO implements IClienteDAO {

	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional(readOnly = true)
	public List<Cliente> findAll() {
		// TODO Auto-generated method stub
		return em.createQuery("from Cliente").getResultList();
	}

	@Override
	@Transactional()
	public void save(Cliente cliente) {
		if (cliente.getId() != null) {
			em.merge(cliente);
		} else {
			em.persist(cliente);
		}
	}

	@Override
	public Cliente findById(Long id) {
		return em.find(Cliente.class, id);
	}

	@Override
	@Transactional()
	public void eliminar(Cliente cliente) {
		em.remove(cliente);
	}
	
}
