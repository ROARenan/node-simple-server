# Node Simple Server

Este projeto consiste em um servidor Node.js simples integrado ao Apache para servir um frontend estático e encaminhar requisições da API para o backend.

## 📌 Requisitos

-   Servidor rodando **Linux** (Ubuntu recomendado)
-   **Apache** instalado e configurado
-   **Node.js** e **npm** instalados

## 🚀 Instalação

### 1️⃣ Configurar o Apache

1. Instale o Apache:

    ```bash
    sudo apt update
    sudo apt install apache2
    ```

2. Ative os módulos necessários:

    ```bash
    sudo a2enmod proxy proxy_http rewrite
    sudo systemctl restart apache2
    ```

3. Configure o VirtualHost do Apache:

    ```bash
    sudo nano /etc/apache2/sites-available/meuprojeto.conf
    ```

    Adicione o seguinte conteúdo:

    ```apache
    <VirtualHost *:80>
        ServerName SERVER_IP
        DocumentRoot /var/www/html/meuprojeto

        <Directory "/var/www/html/meuprojeto">
            AllowOverride All
            Require all granted
        </Directory>

        ProxyPass "/api" "http://SERVER_IP:3000/"
        ProxyPassReverse "/api" "http://SERVER_IP:3000/"

        ErrorLog ${APACHE_LOG_DIR}/meuprojeto_error.log
        CustomLog ${APACHE_LOG_DIR}/meuprojeto_access.log combined
    </VirtualHost>
    ```

4. Ative a configuração e reinicie o Apache:
    ```bash
    sudo a2ensite meuprojeto
    sudo systemctl restart apache2
    ```

### 2️⃣ Configurar o Backend Node.js

1. Clone este repositório:

    ```bash
    git clone https://github.com/seuusuario/node-simple-server.git
    cd node-simple-server
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Execute o servidor:
    ```bash
    node server.js
    ```

### 3️⃣ Estrutura do Projeto

```
📂 node-simple-server
│── server.js
│── package.json
│── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
```

### 4️⃣ Acessando a Aplicação

-   Acesse o frontend via **http://SERVER_IP**
-   A API está disponível em **http://SERVER_IP/api**

### 5️⃣ Testando a API

Você pode testar a API no navegador ou via **curl**:

```bash
curl http://SERVER_IP/api
```

## 📌 Observações

-   Certifique-se de que o **Node.js** está rodando na porta **3000**
-   Se necessário, abra as portas no firewall:
    ```bash
    sudo ufw allow 80/tcp
    sudo ufw allow 3000/tcp
    ```
-   Para rodar o backend em background, utilize **pm2**:
    ```bash
    npm install -g pm2
    pm2 start server.js
    ```

## ✨ Contribuições

Sinta-se à vontade para contribuir com melhorias! Basta abrir um **Pull Request** ou relatar um problema via **Issues**.

---

Desenvolvido por [ROARenan](https://github.com/ROARenan)
