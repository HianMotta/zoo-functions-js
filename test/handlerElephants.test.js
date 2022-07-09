const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Deve retornar undefined quando não é passado nenhum parâmetro', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('Deve retornar "Parâmetro inválido, é necessário uma string" quando o parâmetro for diferente de uma string', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Deve retornar um número ao passar o parâmetro count', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Deve retornar um array que inclui Jefferson ao passar o parâmetro names', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Deve retornar um número próximo a 10.5 ao passar o parâmetro averageAge', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Deve retornar "NW" ao passar o parâmetro location', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Deve retornar um número ao passar o parâmetro popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Deve retornar array com os dias que é possícel visitar os elefantes quando passado o parâmetro availability', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Deve retornar null caso passado uma string que não contemple uma funcionalidade', () => {
    expect(handlerElephants('marco')).toBe(null);
  });
});
