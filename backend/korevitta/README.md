# KoreVitta Backend API (Bootstrap)

Serviço inicial do backend Python usando Django + DRF.

## Estrutura inicial

```text
korevitta/
  manage.py
  requirements.txt
  .env.example
  config/
    settings/
      base.py
      development.py
      staging.py
      production.py
    urls.py
    asgi.py
    wsgi.py
  apps/
    core/
      apps.py
      urls.py
      views.py
```

## Endpoints iniciais

- `GET /v1/` → resposta de bootstrap no formato `{ data: ... }`

## Setup local

1. Criar e ativar ambiente virtual Python 3.12+
2. Instalar dependências:

```bash
pip install -r requirements.txt
```

3. Definir variáveis de ambiente (base em `.env.example`)
4. Rodar migrações padrão do Django:

```bash
python manage.py migrate
```

5. Subir API local:

```bash
python manage.py runserver 127.0.0.1:8000
```

## Settings por ambiente

- `config.settings.development`
- `config.settings.staging`
- `config.settings.production`

Para trocar:

```bash
set DJANGO_SETTINGS_MODULE=config.settings.development
```
