package com.sena.testCrud.IService;

import java.util.List;
import java.util.Optional;

import com.sena.testCrud.Entity.TiposProductos;


public interface ITiposProductosService {
	
	public List<TiposProductos> all();
    
	public Optional<TiposProductos> findById(Long id);
	    
	public TiposProductos save(TiposProductos tiposProductos);
	    
	public void delete(Long id);

}
