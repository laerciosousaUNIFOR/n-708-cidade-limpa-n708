# Requisitos do Sistema – Cidade Limpa

## Requisitos Funcionais

RF01 – O sistema deve permitir o cadastro de ocorrências urbanas.

RF02 – O sistema deve permitir listar as ocorrências cadastradas.

RF03 – O sistema deve permitir atualizar o status da ocorrência.

RF04 – O sistema deve validar campos obrigatórios.

RF05 – O sistema deve armazenar ocorrências em banco de dados.

## Requisitos Não Funcionais

RNF01 – O sistema deve possuir interface web simples e acessível.

RNF02 – O backend deve utilizar Node.js e Express.

RNF03 – O banco de dados deve garantir persistência das informações.

RNF04 – O sistema deve responder em formato JSON.

RNF05 – O projeto deve possuir testes automatizados.

## Regras de Negócio

RN01 – Toda ocorrência deve iniciar com status "Aberta".

RN02 – O status permitido deve ser:

- Aberta
- Em análise
- Resolvida

RN03 – Todos os campos devem ser preenchidos para cadastro.