package org.example.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.model.Usuario;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtLoginFilter extends AbstractAuthenticationProcessingFilter {

    protected  JwtLoginFilter(String url, AuthenticationManager authenticationManager){


        super(new AntPathRequestMatcher(url));

        setAuthenticationManager(authenticationManager);

    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException, IOException, ServletException {


        Usuario usuario = new ObjectMapper().readValue(request.getInputStream(), Usuario.class);

        // retornamos o login, senha e acessos para o autenticador
        return getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(
                usuario.getLogin(),
                usuario.getSenha()));
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {

        new JwtTokenAutenticacaoService().addAuthentication(response, authResult.getName());
    }
}
