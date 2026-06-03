# Documentação da API – Cidade Limpa

## Base URL

```text
http://localhost:3000
```

---

## Health Check

### Endpoint

```http
GET /api/health
```

### Resposta

```json
{
  "status": "online",
  "project": "Cidade Limpa"
}
```

---

## Listar Ocorrências

### Endpoint

```http
GET /api/occurrences
```

### Resposta

```json
[
  {
    "id": 1,
    "citizen_name": "Francisco",
    "type": "Buraco",
    "description": "Buraco na avenida",
    "location": "Eusébio CE",
    "status": "Aberta"
  }
]
```

---

## Cadastrar Ocorrência

### Endpoint

```http
POST /api/occurrences
```

### Body

```json
{
  "citizen_name": "Francisco",
  "type": "Buraco",
  "description": "Buraco na avenida",
  "location": "Eusébio CE"
}
```

### Resposta

```json
{
  "id": 1,
  "status": "Aberta"
}
```

---

## Atualizar Status

### Endpoint

```http
PATCH /api/occurrences/:id/status
```

### Body

```json
{
  "status": "Resolvida"
}
```

### Status Permitidos

- Aberta
- Em análise
- Resolvida

### Resposta

```json
{
  "message": "Status atualizado com sucesso."
}
```