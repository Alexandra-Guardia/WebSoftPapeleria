from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

BASE_DIR = Path(__file__).resolve().parents[2]  #Path(__file__).resolve toma la ubicación real del archivo

class Settings(BaseSettings):
    APP_NAME: str = "WebSoft Papeleria API"
    DATABASE_URL: str
    CORS_ORIGINS: list[str] = ["http://localhost:5173"]

    model_config = SettingsConfigDict(env_file=BASE_DIR / ".env")


settings = Settings()