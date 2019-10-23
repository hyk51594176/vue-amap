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
class AMapAPILoader implements AMapAPILoaderInterfac {
  config = {
    key: null,
    v: '1.4.15',
    UIVersion: '1.0',
    plugin: [],
    callback: 'amapInitComponent'
  } as DefaultConfig
  scriptLoaded = false
  loadPromie: null | Promise<any> = null
  setConfig(config: Config) {
    this.config = {
      ...this.config,
      ...config
    }
  }
  sdkReady() {
    if (this.scriptLoaded) return Promise.resolve()
    if (this.loadPromie === null) {
      this.loadPromie = new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.defer = true
        script.src = this.getScriptSrc()
        ;(<any>window).amapInitComponent = () => {
          const UIScript = document.createElement('script')
          UIScript.type = 'text/javascript'
          UIScript.async = true
          UIScript.defer = true
          UIScript.src = `https://webapi.amap.com/ui/${this.config.UIVersion}/main-async.js`
          this.scriptLoaded = true
          document.head.appendChild(UIScript)
          UIScript.onload = resolve
          UIScript.onerror = reject
        }
        document.head.appendChild(script)
      })
    }
    return this.loadPromie
  }
  getScriptSrc() {
    const { config } = this
    let str = 'https://webapi.amap.com/maps?'
    let keys = ['v', 'key', 'plugin', 'callback']
    return (
      str +
      keys
        .filter(key =>
          Array.isArray(config[key]) ? config[key].length : config[key]
        )
        .map(
          key =>
            `${key}=${
              Array.isArray(config[key]) ? config[key].join(',') : config[key]
            }`
        )
        .join('&')
    )
  }
}

export default new AMapAPILoader()
