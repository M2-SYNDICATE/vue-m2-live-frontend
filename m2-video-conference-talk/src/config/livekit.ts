// Конфигурация LiveKit
export const LIVEKIT_CONFIG = {
  // URL вашего сервера токенов
  TOKEN_SERVER_URL: "http://localhost:3001",

  // API URL для запросов
  API_URL: "http://localhost:3001",

  // WebSocket URL LiveKit сервера
  WS_URL: "wss://95.31.212.251:7880",

  // Настройки токенов
  TOKEN_TTL: "10m",

  // Настройки подключения
  CONNECTION_OPTIONS: {
    autoSubscribe: true,
    publishDefaults: {
      videoSimulcastLayers: [
        { quality: "high", width: 1280, height: 720 },
        { quality: "medium", width: 640, height: 360 },
        { quality: "low", width: 320, height: 180 },
      ],
    },
  },
};

// Проверка окружения
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

// Настройки для продакшена
if (isProduction) {
  LIVEKIT_CONFIG.TOKEN_SERVER_URL = "http://localhost:3001";
  LIVEKIT_CONFIG.API_URL = "http://localhost:3001";
  LIVEKIT_CONFIG.WS_URL = "wss://m2-live.ru";
}
