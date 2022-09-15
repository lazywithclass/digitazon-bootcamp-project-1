package com.lazywithclass.entity;

import javax.persistence.*;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Long id;
    public String name;
    public String description;
    @OneToOne
    public Type type;
    public Float price;
    public String image;
}
