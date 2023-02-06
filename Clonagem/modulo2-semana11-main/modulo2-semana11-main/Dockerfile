# Define a imagem base para essa imagem que estamos criando
FROM openjdk:18-oracle

# Diretorio de trabalho, instruções que vamos definir
WORKDIR /app

# Copiar o jar da aplicação para dentro da imagem do container
COPY target/*.jar /app/agenda-clamed.jar

# Informa qual porta o container vai escutar quando estiver rodando (não publica a porta)
EXPOSE 8080

# Defini o comando padrão que será rodado quando o container iniciar
CMD ["java", "-jar", "agenda-clamed.jar"]

# Para contruir a imagem -t = nome e tag da imagem . onde será criada
# docker image build -t agenda-clamed:1.0 .