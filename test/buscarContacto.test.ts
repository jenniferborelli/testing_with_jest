import { contactos } from "../src/contactos";
import { buscarContacto } from "../src/buscarContacto";

describe("Buscar contacto", () => {
  test("buscar un contacto que no existe", () => {
    const encontrado: boolean = buscarContacto(
      contactos,
      "kmoss4@geocities.com"
    );
    expect(encontrado).toBe(true);
  });
});
