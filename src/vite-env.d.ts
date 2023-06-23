/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * App configuration
   */

  readonly VITE_APP_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
