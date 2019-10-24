/**
 * 项目相关的类型
*/
export interface IRoute {
  path: string,
  name: string,
  component?: React.ReactNode,
  children?: IRoute[]
}
