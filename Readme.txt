Passos para rodar o projeto

Baixe o arquivo project.zip

Extraia o arquivo com o winrar

Através do terminal entre na pasta project e execute os passos a seguir

Para atualizar o projeto com a pasta node-modules utilize o comando

npm install

Para executar o arquivo backend utilize o comando

npx nodemon Controller.js

Para executar o arquivo frontend utilize o comando

npx expo start

Instale o app expo no seu dispositivo móvel

Abra o app e escaneie o qrcode da aplicação

Instale o Xampp para atuar como servidor local na aplicação

No arquivo config.json localizado na pasta config localize development

Atualize as informações referente ao banco de dados conforme as informações do seu banco

Segue as informações que atualizei para conectar o banco de dados

"username": "root",
    "password": null,
    "database": "agromobile",
    "host": "127.0.0.1",
    "dialect": "mysql"

Com o Xampp instalado execute o apache e o servidor mysql

Para atualizar o seu banco de dados utilize o comando a seguir no terminal

npx sequelize-cli db:migrate