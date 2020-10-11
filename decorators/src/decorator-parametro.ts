export {};

function logParameter(target: any, propertyName: any, index: any) {
  const metadataKey = `log_${propertyName}_parameters`;
  console.log(metadataKey);
  if (Array.isArray(target[metadataKey])) {
    target[metadataKey].push(index);
  } else {
    target[metadataKey] = [index];
  }
  console.log('metadataKey', target[metadataKey]);
}

class P {
  greet(@logParameter message: string, @logParameter end: string): string {
    return `${message} ${end}`;
  }
}

const p = new P();
p.greet('Hola', 'Que tal');
