package com.sena.testCrud.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="productos")
public class Productos {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Column(name = "nombre", nullable = false, length = 150, unique = true)
    private String nombre;
	
	@Column(name = "descripcion", nullable = false)
    private String descripcion;
	
	@Column(name = "stock", nullable = false)
    private Integer stock;
	
	@Column(name = "valor_unitario", nullable = false)
    private Double valorUnitario;
	
	@Column(name = "estado", nullable = false)
    private Boolean estado;
	
	 @ManyToOne(fetch = FetchType.EAGER, optional = false)
	 @JoinColumn(name = "tipo_producto_id", nullable = false)
	 TiposProductos tipoProductoId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Integer getStock() {
		return stock;
	}

	public void setStock(Integer stock) {
		this.stock = stock;
	}

	public Double getValorUnitario() {
		return valorUnitario;
	}

	public void setValorUnitario(Double valorUnitario) {
		this.valorUnitario = valorUnitario;
	}

	public Boolean getEstado() {
		return estado;
	}

	public void setEstado(Boolean estado) {
		this.estado = estado;
	}

	public TiposProductos getTipoProductoId() {
		return tipoProductoId;
	}

	public void setTipoProductoId(TiposProductos tipoProductoId) {
		this.tipoProductoId = tipoProductoId;
	}	 
	 
}
