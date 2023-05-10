// process.stdin.pipe(process.stdout)

import { Readable, Writable, Transform } from "node:stream"

/**
 * Stream de leitura - Readable
 */
class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++
    setTimeout(() => {
      if (i > 20) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
        this.push(buf)
      }
    }, 1000)
  }
  
}

class MultiplyByTenStream extends Writable {
  //Chunk é o pedaço que a Stream Leu
  //Callback é uma função que a Stream de escrita precisa chamar quando ela terminar de fazer o que ela precisa fazer com a informação
  //Writable não retorna nada, apenas processa
  _write(chunk, encondig, callback) {
    console.log(Number(chunk.toString())*10)
    callback()
  }
}

/**
 * Stream de transformação serve para transformar um dado no outro
 */
class InverseNumberStream extends Transform {
  _transform(chunk, encondig, callback) {
    const transformed = Number(chunk.toString()) * -1
    callback(null, Buffer.from(String(transformed)))
  }
}

new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream())