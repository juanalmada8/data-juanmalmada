FROM python:3.12-slim

COPY --from=ghcr.io/astral-sh/uv:0.13.0 /uv /usr/local/bin/uv
ENV UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy PORT=8080

WORKDIR /app
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-dev --no-install-project
COPY app ./app

RUN useradd --create-home api
USER api

CMD ["sh", "-c", "/app/.venv/bin/fastapi run app/main.py --host 0.0.0.0 --port ${PORT}"]
