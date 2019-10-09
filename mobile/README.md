# AirCnC

## Índice

- [O Projeto](#1)
- [Dependências](#2)
- [Iniciar o Projeto](#3)

## O Projeto <a name = "1"></a>

O projeto foi desenvolvido durante a semana omnistack 9. A ideia é desenvolver uma aplicação simples que tivesse a função parecida do AirBnB de fazer reservas, porém o usuário iria procurar um local para programar.

Foi estipulado que empresas que fossem alugar usariam a interface Web e usuários que queiram alugar um local utilizariam a interface Mobile.

A empresa acessa com um e-mail e tem acesso ao cadastro de spot (locais) que disponibiliza para os demais usuários.

Os usuários, para entrar no sistema devem informar seu e-mail e tecnologias de interesse, de acordo com essas tecnologias ele terá acesso aos spots que permitem que ele trabalhe com elas.

## Dependências <a name = "2"></a>

### Backend - NodeJS

  -cors: ^2.8.5
  -express: ^4.17.1
  -mongoose: ^5.7.3
  -multer: ^1.4.2
  -socket.io: ^2.3.0
  
  Dependências de Desenvolvimento:
  
  -nodemon: 1.19.3

### FrondEnd - ReactJs
  
  -axios: ^0.19.0
  -react: ^16.10.2
  -react-dom: ^16.10.2
  -react-router-dom: ^5.1.2
  -react-scripts: 3.2.0
  -socket.io-client: ^2.3.0

### Mobile - React Native
  
  axios: ^0.19.0
  expo: ^35.0.0
  react: 16.8.3
  react-dom: 16.8.3
  react-native: https://github.com/expo/react-native/archive/sdk-35.0.0.tar.gz
  react-native-gesture-handler: ~1.3.0
  react-native-reanimated: ~1.2.0
  react-native-web: ^0.11.7
  react-navigation: ^4.0.10
  socket.io-client: ^2.3.0
  
  Dependências de Desenvolvimento:
  
  - babel-preset-expo: ^7.0.0

### Mobile - React Native

  -MongoDB

  
### Instalação das dependências

  As dependências foram todas instaladas utilizando o comando yarn

  ```
  yarn add <dependencia>
  ```

## Iniciar o Projeto <a name = "3"></a>

  -Configurar a URL do mongoDB no backend
  -Configurar IP da máquina na api do mobile

  -Iniciar os projetos com os seguintes comandos:
    -Backend: 'yarn dev'
    -Frontend: 'yarn start'
    -Mobile: 'expo start'  
  

