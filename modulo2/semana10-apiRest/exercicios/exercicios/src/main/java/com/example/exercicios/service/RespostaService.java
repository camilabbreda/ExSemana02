package com.example.exercicios.service;

import com.example.exercicios.Controller.dto.RespostaRequest;
import com.example.exercicios.Controller.dto.RespostaResponse;
import com.example.exercicios.dataProvider.model.PerguntaEntity;
import com.example.exercicios.dataProvider.model.RespostaEntity;
import com.example.exercicios.dataProvider.repository.PerguntaRepository;
import com.example.exercicios.dataProvider.repository.RespostaRepository;
import com.example.exercicios.exception.NotFoundException;
import com.example.exercicios.exception.ServerErrorException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
@AllArgsConstructor
public class RespostaService {
    private RespostaRepository respostaRepository;
    private PerguntaRepository perguntaRepository;


    public List<RespostaResponse> encontrarTodasRespostas(){
        try {
            List<RespostaResponse> respostaResponse = new ArrayList<>();
            List<RespostaEntity> respostaEntity = respostaRepository.findAll();

            if (respostaEntity.size() != 0) {
            for (RespostaEntity resposta:respostaEntity) {
                respostaResponse.add(new RespostaResponse(
                        resposta.getTextoResposta(),
                        resposta.getPerguntaEntity().getTextoPerguntas(),
                        resposta.getPerguntaEntity().getAssuntoEntity().getNomeAssunto()
                ));
            }
                return respostaResponse;
            }
                throw new NotFoundException();
        }catch (NotFoundException e){
            throw new NotFoundException("Nenhuma Resposta Encontrada!");
        }
        catch (Exception e){
            throw new ServerErrorException("Erro ao buscar Respostas");
        }
    }

        public RespostaResponse adicionarResposta(RespostaRequest respostaRequest){
            PerguntaEntity perguntaEntity = perguntaRepository.findById(respostaRequest.getPerguntaId()).orElseThrow(
                    ()-> new NotFoundException("Pergunta não Existe!")
            );
            RespostaEntity respostaEntity = respostaRepository.save(
                    new RespostaEntity(
                            respostaRequest.getTextoResposta(),
                            perguntaEntity
                    )
            );
            return new RespostaResponse(
                    respostaEntity.getTextoResposta(),
                    respostaEntity.getPerguntaEntity().getTextoPerguntas(),
                    perguntaEntity.getAssuntoEntity().getNomeAssunto()
            );
    }




}
