import { describe, it, expect } from "vitest"
/*
Escribir una funcion que al pasarle un numero
-muestra "fizz" si es multiplo de 5
-muestra "buzz" si es multiplo de 3
- muestra fizzbuzz si es multiplo de 3 y 5
- muestra el numero si no es multiplo de ninguno de los anteriores
 */

const fizzBuzz = (number) => {
    if (typeof number !== 'number') throw new Error('parameter must be a number')
    if (Number.isNaN(number)) throw new Error('parameter must be a number')

    const multiplies = { 3: 'fizz', 5: 'buzz' }
    let output = ''

    Object
        .entries(multiplies)
        .forEach(([multiplier, word]) => {
            if (number % multiplier === 0) output += word
        })

    return output === '' ? number : output
}

describe('fizzbuzz', () => {
    // it('should be a function', () => {
    //     expect(typeof fizzBuzz).toBe('function')
    // });
    it('should throw if not a number in the parameters', () => {
        expect(() => fizzBuzz()).toThrow()
    });
    it('should throw  a error message for number in the parameters', () => {
        expect(() => fizzBuzz(NaN)).toThrow('parameter must be a number')
    });
    it('should return 1 if number is 1', () => {
        expect(fizzBuzz(1)).toBe(1)
    })
    it('should return 2 if number is 2', () => {
        expect(fizzBuzz(2)).toBe(2)
    })
    it('should return 3 if number is 3', () => {
        expect(fizzBuzz(3)).toBe('fizz')
    })
    it('should return fizz if number is multiple 3', () => {
        expect(fizzBuzz(6)).toBe('fizz')
        expect(fizzBuzz(9)).toBe('fizz')
        expect(fizzBuzz(12)).toBe('fizz')

    })
    // quita los test redundates
    it('should return buzz if number is multiple of 5', () => {
        expect(fizzBuzz(10)).toBe('buzz')

        expect(fizzBuzz(20)).toBe('buzz')

    })
    it('should return fizzbuzz if number is multiple of 3 & 5', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz')

    })

})
