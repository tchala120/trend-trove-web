/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * App configuration
   */

  readonly VITE_APP_VERSION: string

  /**
   * API configuration
   */
  VITE_TREND_TROVE_GRAPHQL_URL: string
  VITE_AUTHORIZATION_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
