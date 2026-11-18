from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Configuración por variables de entorno. Ver .env.example."""

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    entorno: str = "dev"
    origenes_permitidos: list[str] = ["http://localhost:4321"]


@lru_cache
def get_settings() -> Settings:
    return Settings()
