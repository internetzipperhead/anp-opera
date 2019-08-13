/**
 * 工具类
*/
export function deepCopy(input: any): any {
  if (input instanceof Object) {
    if (Array.isArray(input)) {
      return input.map(deepCopy)
    }
    let output: any = {}
    Object.entries(input).forEach(([key, val]) => {
      output[key] = deepCopy(val)
    })
    return output
  }
  return input
}
