package com.sena.testCrud.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.testCrud.Entity.TiposProductos;
import com.sena.testCrud.IRepository.ITiposProductosRespository;
import com.sena.testCrud.IService.ITiposProductosService;

@Service
public class TiposProductosService implements ITiposProductosService{

	@Autowired
	private ITiposProductosRespository repository;

	@Override
	public List<TiposProductos> all() {
		return repository.findAll();
	}

	@Override
	public Optional<TiposProductos> findById(Long id) {
		return repository.findById(id);
	}

	@Override
	public TiposProductos save(TiposProductos tiposProductos) {
		return repository.save(tiposProductos);
	}

	@Override
	public void delete(Long id) {
		repository.deleteById(id);		
	}	
}
