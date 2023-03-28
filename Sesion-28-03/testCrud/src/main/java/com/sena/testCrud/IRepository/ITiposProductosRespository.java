package com.sena.testCrud.IRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sena.testCrud.Entity.TiposProductos;

public interface ITiposProductosRespository extends JpaRepository<TiposProductos, Long> {

}
