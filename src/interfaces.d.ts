declare enum NavigationType {
  Navigate,
  Modal
}

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

export interface ScaleSelectedEvent {
  root: string,
  interval: string
}

export interface MenuNavigationContext {
  menuName: string,
  navigationType: NavigationType,
  destComponent: string,
  destComponentProps: object
}