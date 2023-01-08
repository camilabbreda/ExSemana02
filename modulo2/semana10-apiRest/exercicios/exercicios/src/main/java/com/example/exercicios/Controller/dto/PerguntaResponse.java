package com.example.exercicios.Controller.dto;

import com.example.exercicios.dataProvider.model.AssuntoEntity;
import lombok.AllArgsConstructor;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
public class PerguntaResponse {
    private String textoPergunta;
    private String nomeAssunto;
//    private AssuntoEntity assuntoEntity;

    public PerguntaResponse(String textoPergunta, String nomeAssunto){
        this.textoPergunta=textoPergunta;
        this. nomeAssunto = nomeAssunto;
//        this.assuntoEntity = assuntoEntity;
    }
}
