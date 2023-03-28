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

import com.sena.testCrud.Entity.Productos;
import com.sena.testCrud.IService.IProductosService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/tienda/productos")
public class ProductosController {

	@Autowired
	private IProductosService service;
	
	@GetMapping
	public List<Productos> all() {
		return service.all();
	}
	
	@GetMapping("{id}")
	public Optional<Productos> show(@PathVariable Long id) {
		return service.findById(id);
	}
	
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public Productos save(@RequestBody Productos productos) {
		return service.save(productos);
	}
	
	@PutMapping("{id}")
	@ResponseStatus(code = HttpStatus.CREATED)
	public Productos update(@PathVariable Long id, @RequestBody Productos productos) {
		Optional<Productos> op = service.findById(id);
		
		if (!op.isEmpty()) {
			Productos productosUpdate = op.get();
			productosUpdate.setDescripcion(productos.getDescripcion());
			productosUpdate.setNombre(productos.getNombre());
			productosUpdate.setStock(productos.getStock());
			productosUpdate.setValorUnitario(productos.getValorUnitario());
			productosUpdate.setEstado(productos.getEstado());
			productosUpdate.setTipoProductoId(productos.getTipoProductoId());
			return service.save(productosUpdate);
		}
		
		return productos;
	}
	
	@DeleteMapping("{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
}
