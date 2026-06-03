# Cidade Limpa

## Descrição do Projeto

O Cidade Limpa é um sistema web desenvolvido para permitir o registro e acompanhamento de problemas urbanos, como lixo acumulado, buracos em vias públicas, falhas na iluminação pública e outras situações relacionadas à infraestrutura urbana.

O projeto está alinhado ao Objetivo de Desenvolvimento Sustentável (ODS) 11 – Cidades e Comunidades Sustentáveis, buscando promover maior participação cidadã e contribuir para a melhoria da qualidade de vida da população.

---

## Problema Social Atendido

Muitos problemas urbanos permanecem sem solução por falta de um canal simples e acessível para comunicação entre moradores e responsáveis pela manutenção da cidade.

O Cidade Limpa foi desenvolvido para permitir que cidadãos registrem ocorrências urbanas e acompanhem sua evolução de forma simples e organizada.

---

## Funcionalidades Implementadas

* Cadastro de ocorrências urbanas
* Listagem de ocorrências cadastradas
* Atualização do status das ocorrências
* Integração entre frontend, backend e banco de dados
* Persistência dos dados em SQLite
* Validação de campos obrigatórios
* Testes automatizados do backend

---

## Tecnologias Utilizadas

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express
* SQLite

### Testes

* Jest
* Supertest

---

## Arquitetura Implementada

O sistema foi desenvolvido utilizando uma arquitetura simples em três camadas:

### Frontend

Responsável pela interação com o usuário.

### Backend

Responsável pelas regras de negócio e endpoints da API.

### Banco de Dados

Responsável pelo armazenamento persistente das ocorrências.

Fluxo da aplicação:

Usuário → Frontend → API Node.js → SQLite

---

## Estrutura do Projeto

## Estrutura do Projeto

```text
cidade-limpa-n708
│
├── README.md
├── docs
│   ├── api
│   │   └── api_documentation.md
│   ├── architecture
│   │   └── architecture.md
│   └── requirements
│       └── requirements.md
│
├── validation
│   ├── evidence
│   │   └── screenshots
│   ├── feedback
│   │   └── feedback_summary.md
│   ├── target_audience.md
│   └── validation_report.md
│
├── frontend
│   ├── web
│   │   ├── src
│   │   └── public
│   └── mobile
│       ├── src
│       └── package.json
│
├── backend
│   ├── src
│   ├── tests
│   ├── package.json
│   └── package-lock.json
│
└── database
    └── schema.sql
```

## Como Executar o Projeto

### Backend

Acesse a pasta backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Execute o servidor:

```bash
npm start
```

O backend ficará disponível em:

```text
http://localhost:3000
```

---

### Frontend

Abra o arquivo:

```text
frontend/web/src/index.html
```

Utilizando Live Server ou diretamente no navegador.

---

## Como Executar os Testes

Dentro da pasta backend:

```bash
npm test
```

---

## Endpoints da API

### Health Check

```http
GET /api/health
```

---

### Listar Ocorrências

```http
GET /api/occurrences
```

---

### Cadastrar Ocorrência

```http
POST /api/occurrences
```

Exemplo:

```json
{
  "citizen_name": "Francisco",
  "type": "Buraco",
  "description": "Buraco grande na avenida principal",
  "location": "Eusébio CE"
}
```

---

### Atualizar Status

```http
PATCH /api/occurrences/:id/status
```

Exemplo:

```json
{
  "status": "Resolvida"
}
```

Status permitidos:

* Aberta
* Em análise
* Resolvida

---

## Banco de Dados

O sistema utiliza SQLite para armazenamento local das ocorrências.

Tabela principal:

* occurrences

Campos:

* id
* citizen_name
* type
* description
* location
* status
* created_at

---

## Validação com Público-Alvo

A solução foi apresentada a um morador da região de Eusébio – Ceará, público diretamente relacionado ao problema social abordado.

O participante avaliou positivamente a proposta e considerou útil a possibilidade de registrar e acompanhar problemas urbanos de forma simples e acessível.

---

## Mudanças em Relação à N705

Na etapa N705 o projeto previa funcionalidades mais amplas, incluindo:

* Login de usuários
* Mapa interativo
* Notificações
* Aplicativo mobile

Para a etapa N708 foi desenvolvido um MVP funcional focado nas funcionalidades centrais:

* Registro de ocorrências
* Listagem de ocorrências
* Atualização de status
* Persistência dos dados
* Testes automatizados

Essa decisão permitiu garantir uma solução funcional e alinhada ao objetivo principal do projeto.

---

## Integrante

**Francisco Laércio Moura De Sousa Filho**

Matrícula: 2317769