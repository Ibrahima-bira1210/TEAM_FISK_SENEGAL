package com.teamfisk.backend_app.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class Localisation {
    private double lat;
    private double lng;
    private String color;
}
