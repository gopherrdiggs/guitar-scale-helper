export interface ScaleCategory {
  name: string,
  scales: Scale[]
}

export interface Scale {
  id: string,
  name: string,
  modes: ScaleMode[]
}

export interface ScaleMode {
  id: string,
  name: string,
  intervalDefinition: string
}