import { calcular } from "../calculadora";

describe("calcular function", () => {
  test("somar", () => {
    expect(calcular(10, 5, "soma")).toBe(15);
  });

  test("subtrair", () => {
    expect(calcular(10, 5, "subtracao")).toBe(5);
  });

  test("multiplicar", () => {
    expect(calcular(10, 5, "multiplicacao")).toBe(50);
  });

  test("dividir", () => {
    expect(calcular(10, 5, "divisao")).toBe(2);
  });

  test("dividir por 0", () => {
    expect(calcular(10, 0, "divisao")).toBe(
      "Erro: Divisão por zero não permitida"
    );
  });
});
