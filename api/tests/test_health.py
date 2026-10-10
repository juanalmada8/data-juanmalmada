from fastapi.testclient import TestClient

from app.main import app

cliente = TestClient(app)


def test_health_responde_ok() -> None:
    r = cliente.get("/health")
    assert r.status_code == 200
    assert r.json() == {"estado": "ok"}


def test_cors_permite_origen_configurado() -> None:
    r = cliente.options(
        "/health",
        headers={"Origin": "http://localhost:4321", "Access-Control-Request-Method": "GET"},
    )
    assert r.headers.get("access-control-allow-origin") == "http://localhost:4321"


def test_cors_rechaza_otro_origen() -> None:
    r = cliente.get("/health", headers={"Origin": "https://otro.com"})
    assert "access-control-allow-origin" not in r.headers
