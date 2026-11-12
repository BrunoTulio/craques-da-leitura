# Imagem oficial leve do Nginx baseada em Alpine Linux (~20MB)
FROM nginx:alpine

# Remove os arquivos padrão de boas-vindas do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do jogo web para o diretório de publicação do Nginx
COPY . /usr/share/nginx/html/

# Porta padrão HTTP
EXPOSE 80

# Comando para manter o Nginx rodando em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
