package com.example.exercicios.Controller.dto;

import com.example.exercicios.dataProvider.model.PerguntaEntity;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RespostaResponse {
    private String textoResposta;

    private String textoPergunta;
    private String nomeAssunto;


}
