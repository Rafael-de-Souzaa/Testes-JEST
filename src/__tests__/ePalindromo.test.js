import { ePalindromo } from "../ePalindromo";

describe("ePalindromo function", () => {
  test("should return true for palindromes", () => {
    expect(ePalindromo("arara")).toBe(true);
    expect(ePalindromo("A man, a plan, a canal, Panama")).toBe(true); 
    expect(ePalindromo("Madam In Eden, I’m Adam")).toBe(true); 
  });

  test("should return false for non-palindromes", () => {
    expect(ePalindromo("casa")).toBe(false);
    expect(ePalindromo("hello")).toBe(false);
  });
});
