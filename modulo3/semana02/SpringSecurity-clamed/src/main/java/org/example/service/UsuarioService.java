package org.example.service;

import org.example.model.Usuario;
import org.example.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import javax.websocket.server.PathParam;
import java.util.List;
@Service

public class UsuarioService implements UserDetailsService {
    @Autowired
    private UsuarioRepository repository;

    public Usuario saveUsuario (Usuario usuario){

        usuario.setSenha(new BCryptPasswordEncoder().encode(usuario.getSenha()));
        return repository.save(usuario);
    }
    public Usuario GetUsuarioByLogin(String login){
        Usuario usuario = repository.findUserByLogin(login);
        return usuario;
    }
    @Transactional
    public void deleteUsuario(Long id){
        repository.deleteById(id);
    }

    public Usuario getUsuarioById(Long id){
        Usuario usuario = repository.findById(id).get();
        return usuario;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Usuario usuario = repository.findUserByLogin(username);

        if(usuario == null){
            throw new UsernameNotFoundException("Usuário não cadastrado");
        }

        return new User(usuario.getLogin(), usuario.getPassword(), usuario.getAuthorities());

    }
    @Transactional(readOnly = true)
    public List<Usuario> getUsers(){

        List<Usuario> usuarios = repository.findAll();

        return usuarios;
    }

}
