package com.lazywithclass.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Type {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long id;
    public String name;
    @OneToMany
    public List<Product> products;
}
