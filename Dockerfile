# Fase de construcción
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Otorga permisos al directorio de trabajo
RUN chmod -R 755 /app

# Instala Vite globalmente para evitar problemas de permisos
RUN npm install -g vite

# Genera la carpeta "dist"
RUN npm run build

# Fase de producción
FROM nginx:alpine

# Copiar la configuración principal de nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Copiar configuraciones específicas de servidores
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos al contenedor nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
