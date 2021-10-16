export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
  }
  
export interface Genre {
    _id?: number
    title: string,
    subgenres: string[],
    origins: string[]
}