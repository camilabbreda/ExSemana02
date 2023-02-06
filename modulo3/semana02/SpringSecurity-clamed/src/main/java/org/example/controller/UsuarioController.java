package org.example.controller;

import javassist.NotFoundException;
import org.example.dto.UsuarioRequest;
import org.example.dto.UsuarioResponse;
import org.example.model.Usuario;
import org.example.service.UsuarioService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService service;

    @PostMapping
    public ResponseEntity<UsuarioResponse> register (@RequestBody UsuarioRequest request){
        Usuario usuario = toModel(request);
        UsuarioResponse response = toObjectOutPut(service.saveUsuario(usuario));
        return new ResponseEntity <UsuarioResponse> (response, HttpStatus.CREATED);
    }
    @PutMapping
    public ResponseEntity<UsuarioResponse> update(@RequestBody UsuarioRequest request){
        Usuario usuario = toModel(request);
        UsuarioResponse response = toObjectOutPut(service.saveUsuario(usuario));
        return new ResponseEntity<UsuarioResponse>(response, HttpStatus.OK);
    }
    @DeleteMapping(value = "/{idUsuario}")
    public ResponseEntity<String> delete(@PathVariable(value = "idUsuario") Long id){
        service.deleteUsuario(id);
        return new ResponseEntity<String>("Usuário deletado com sucesso.", HttpStatus.OK);
    }
    @GetMapping(value = "/")
    public ResponseEntity<List<UsuarioResponse>> getUsuarios() {
        List<Usuario> usuarios = service.getUsers();
        List<UsuarioResponse> response = toCollectionDTOOutput(usuarios);
        return new ResponseEntity<List<UsuarioResponse>>(response, HttpStatus.OK);
    }

    @GetMapping(value = "/usuario/{id}")
    public ResponseEntity<UsuarioResponse> getUsuarioById(@PathVariable(value = "id") Long id){
        Usuario usuario = service.getUsuarioById(id);
        UsuarioResponse response = new UsuarioResponse(usuario.getId(), usuario.getNome(), usuario.getLogin(), usuario.getSenha(), usuario.getEmail());
        return new ResponseEntity<UsuarioResponse>(response, HttpStatus.OK);
    }
    @RequestMapping(value = "/usuario")
    public ResponseEntity <UsuarioResponse> getUsuarioByLogin(@RequestParam(name = "login") String login){
        UserDetails details = service.loadUserByUsername(login);
        Usuario user = service.GetUsuarioByLogin(login);
        UsuarioResponse response = new UsuarioResponse(user.getId(),user.getNome(), details.getUsername(), details.getPassword(), user.getEmail()) ;
        return new ResponseEntity<UsuarioResponse>(response, HttpStatus.OK);
    }
    // método para fazer a conversão de DTO de entrada (UsuarioInput) para Model (Usuario)
    private Usuario toModel(UsuarioRequest request){
        Usuario usuario = new Usuario();
        BeanUtils.copyProperties(request, usuario);
        return usuario;

    }

    // método para fazer a conversão de Model para DTO de saída (UsuarioOutput)
    private UsuarioResponse toObjectOutPut(Usuario usuario){
        UsuarioResponse response = new UsuarioResponse();
        BeanUtils.copyProperties(usuario, response);
        return response;
    }

    // método para converter uma lista de Usuarios (List<Usuario>) para uma lista de DTO de saída (List<UsuarioOutput>)
    private List<UsuarioResponse> toCollectionDTOOutput(List<Usuario> usuarios){
        return usuarios.stream()
                .map(usuario -> toObjectOutPut(usuario))
                .collect(Collectors.toList());
    }


}
