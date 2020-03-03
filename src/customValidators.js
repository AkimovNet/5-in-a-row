export function equalOrGreaterThan(number) {
  return (props, propName) => props[propName] < number ?
    new Error(`${propName} number must be equal or greater than ${number}`) :
    null
}
