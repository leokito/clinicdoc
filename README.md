# ClinicDoc App

Aplicação com objetivo de completar um teste técnico para a conectadoc.

Este projeto foi criado em react.

## Instalação

No diretorio de serviço, execute:

### `git clone git@github.com:leokito/clinicdoc.git`

Para trocar para a pasta do projeto:

### `cd clinidoc`

Na pasta do projeto para iniciar o projeto, executar:

### `yarn start`

Rodará o app em modo de desenvolvimento.\
Acesse [http://localhost:3000](http://localhost:3000) para visualizar no seu navegador.

A pagina recarregará quando você salvar as alterações.\
É possivel ver erros no console.

## Landing Page:
Página inicial, nela é possível ser redirecionado á página de login, a página de registro está desabilitada.

## Login Page

Na página de login há um formulario para acessar o sistema, como o registro está desabilitado, utilizar as seguintes credenciais:

username: johnjohn
password: 123456

## Dashboard

Página que mostra indicadores de consultas para o dia, consultas realizadas e consultas canceladas.

PS.: Já há dados no banco de dado para demonstrar a renderização.

Ao clicar no botão Agenda, será redirecionado à página de agenda.

PS.: Por motivo de tempo, a possibilidade de cancelar ou completar as consultas, bem como uma página protótipo de prontuário, foram desabilitadas.

## Agenda Médica

Nesta página há um calendário das consultas agendadas. Nela é possivel realizar a marcação: 
ao clicar no horário em que quer marcar ou no botão "Marcar Consulta".
As consultas tem duração base de 30 minutos então não é preciso determinar horário final da consulta.

Não foi possivel integrar o clique na data ao formulario, mas realizarei em uma atualização futura.

Se retornar à pagina de Dashboard, haverá será mostradas no dashboard as consultas marcadas.

# Sobre o backend

O backend com as funcionalidades de criação de usuário, login, cadastro de consulta, busca de usuario e busca de consultas foi desenvolvido com 
* Django
* Banco de Dados SQLite3

Desde já agradeço a oportunidade de realizar este desafio!
