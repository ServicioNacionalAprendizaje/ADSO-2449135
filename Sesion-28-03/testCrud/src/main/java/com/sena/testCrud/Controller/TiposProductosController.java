package com.sena.testCrud.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.sena.testCrud.Entity.TiposProductos;
import com.sena.testCrud.IService.ITiposProductosService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/tienda/tiposProductos")
public class TiposProductosController {

	@Autowired
	private ITiposProductosService service;
	
	@GetMapping
	public List<TiposProductos> all() {
		return service.all();
	}
	
	@GetMapping("{id}")
	public Optional<TiposProductos> show(@PathVariable Long id) {
		return service.findById(id);
	}
	
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public TiposProductos save(@RequestBody TiposProductos tiposTiposProductos) {
		return service.save(tiposTiposProductos);
	}
	
	@PutMapping("{id}")
	@ResponseStatus(code = HttpStatus.CREATED)
	public TiposProductos update(@PathVariable Long id, @RequestBody TiposProductos tiposTiposProductos) {
		Optional<TiposProductos> op = service.findById(id);
		
		if (!op.isEmpty()) {
			TiposProductos tiposTiposProductosUpdate = op.get();
			tiposTiposProductosUpdate.setDescripcion(tiposTiposProductos.getDescripcion());			
			tiposTiposProductosUpdate.setEstado(tiposTiposProductos.getEstado());
			return service.save(tiposTiposProductosUpdate);
		}
		
		return tiposTiposProductos;
	}
	
	@DeleteMapping("{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
}
