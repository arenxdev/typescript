type SumaParameter  = string | number
type sumeReturnType = number | string

function suma(num1: SumaParameter, num2: SumaParameter): sumeReturnType {
  return String(num1) + num2
}

interface InterfaceOne {
  prop1: number
}

interface InterfaceTwo {
  prop2: number
}

type InterfaceMix = InterfaceOne | InterfaceTwo

const interfaceMix: InterfaceMix = {
  prop1: 2,
  prop2: 1
}
