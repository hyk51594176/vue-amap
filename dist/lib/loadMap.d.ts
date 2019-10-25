export interface Config {
  key: string
  v?: string
  UIVersion?: string
  plugin?: Array<string>
  callback?: string
}
interface DefaultConfig {
  key: string | null
  v: string
  UIVersion: string
  plugin: Array<string>
  callback: string
  [key: string]: any
}
export interface AMapAPILoaderInterfac {
  config: DefaultConfig
  scriptLoaded: boolean
  loadPromie: null | Promise<any>
  sdkReady(): Promise<any>
  getScriptSrc(): string
}
declare class AMapAPILoader implements AMapAPILoaderInterfac {
  config: DefaultConfig
  scriptLoaded: boolean
  loadPromie: null | Promise<any>
  setConfig(config: Config): void
  sdkReady(): Promise<any>
  getScriptSrc(): string
}
declare const _default: AMapAPILoader
export default _default
