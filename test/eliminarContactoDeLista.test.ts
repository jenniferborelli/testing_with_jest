import { Contacto, contactos } from "../src/contactos";
import { eliminarContacto } from "../src/eliminarContacto";

describe("Eliminar contacto", () => {
  test("despues de eliminar un contacto, este deberia dejar de existir", () => {
    const eliminado: boolean = eliminarContacto(
      contactos,
      "kmoss4@geocities.com"
    );
    expect(eliminado).toBe(true);
  });
});
