package com.sena.testCrud.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.testCrud.Entity.Productos;
import com.sena.testCrud.IRepository.IProductosRespository;
import com.sena.testCrud.IService.IProductosService;

@Service
public class ProductosService implements IProductosService{

	@Autowired
	private IProductosRespository repository;

	@Override
	public List<Productos> all() {
		return repository.findAll();
	}

	@Override
	public Optional<Productos> findById(Long id) {
		return repository.findById(id);
	}

	@Override
	public Productos save(Productos productos) {
		return repository.save(productos);
	}

	@Override
	public void delete(Long id) {
		repository.deleteById(id);		
	}	
}
