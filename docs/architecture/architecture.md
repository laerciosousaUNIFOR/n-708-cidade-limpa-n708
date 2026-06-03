# Arquitetura do Sistema – Cidade Limpa

## Visão Geral

O sistema Cidade Limpa foi desenvolvido utilizando uma arquitetura simples de três camadas:

1. Frontend
2. Backend
3. Banco de Dados

## Frontend

Tecnologias:

- HTML
- CSS
- JavaScript

Responsabilidades:

- Exibir interface para o usuário
- Enviar dados para a API
- Exibir ocorrências cadastradas
- Atualizar status das ocorrências

## Backend

Tecnologias:

- Node.js
- Express

Responsabilidades:

- Receber requisições HTTP
- Validar dados enviados
- Executar regras de negócio
- Manipular banco de dados
- Retornar respostas JSON

## Banco de Dados

Tecnologia:

- SQLite

Responsabilidades:

- Armazenar ocorrências
- Persistir status
- Manter histórico de registros

## Fluxo da Aplicação

Usuário
↓
Frontend Web
↓
API Node.js
↓
SQLite

## Benefícios da Arquitetura

- Simplicidade
- Facilidade de manutenção
- Baixo custo de implementação
- Facilidade para futuras expansões