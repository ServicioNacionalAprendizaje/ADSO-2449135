package com.sena.testCrud.IRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sena.testCrud.Entity.Productos;

public interface IProductosRespository extends JpaRepository<Productos, Long> {

}
