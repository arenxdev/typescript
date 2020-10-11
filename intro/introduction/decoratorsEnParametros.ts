function logParameter(target, propertyName, index) {
  const metaDataKey = `log_${propertyName}_parameters`
  if (Array.isArray(target[metaDataKey])) {
    target[metaDataKey].push(index)
  } else {
    target[metaDataKey] = [index]
  }
  console.log(target[metaDataKey])
}

class Person {
  greet(message: string, @logParameter additionalString: string): string {
    return message
  }
}

const person = new Person()
person.greet('Hola', 'Aaron')