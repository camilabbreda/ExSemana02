package org.example.security;






import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.example.context.ApplicationContextLoad;
import org.example.model.Usuario;
import org.example.repository.UsuarioRepository;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

@Service
@Component
public class JwtTokenAutenticacaoService{

    /*A validade do token de 2 dias*/
    private static final long EXPIRATION_TIME = 24 * 60 * 60 * 2;

    /* Uma senha única para compor a autenticação e ajudar na segurança */
    private static final String SECRET = "SenhaExtremamenteSecretaEForte";

    /* Prefixo padrão do token */
    private static final String TOKEN_PREFIX = "Bearer";


    /* Cabeçalho do token */
    private static  final String HEADER_STRING = "Authorization";


    // Gerando token de autenticação e adicioando ao cabelho da reposta HTTP
    public void addAuthentication(HttpServletResponse response, String username) throws IOException {

        //Montagem do token
        String JWT =  Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis()+EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET).compact();


        String token = TOKEN_PREFIX + " " + JWT;

        response.getWriter().write("{\"Authorization\": \""+token+"\"}");
    }


    public Authentication getAuthentication(HttpServletRequest request){


        String token = request.getHeader(HEADER_STRING);

        if(token != null){

            String user = Jwts.parser().setSigningKey(SECRET)
                    .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                    .getBody().getSubject();

            if (user != null){
                Usuario usuario = ApplicationContextLoad.getApplicationContext()
                        .getBean(UsuarioRepository.class).findUserByLogin(user);

                System.out.println("Login do usuário: "+usuario.getLogin());

                if(usuario != null){
                    return new UsernamePasswordAuthenticationToken(
                            usuario.getLogin(),
                            usuario.getSenha(),
                            usuario.getAuthorities());
                }



            }

        }

        return null;
    }

}
