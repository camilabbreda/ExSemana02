package com.example.exercicios.Controller.dto;

import com.example.exercicios.dataProvider.model.AssuntoEntity;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AssuntoResponse {
    private String nomeAssunto;

}
