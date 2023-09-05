
import { Contacto, contactos } from "../src/contactos";

describe("Eliminar contacto", () => {
  test("despues de eliminar un contacto, este deberia dejar de existir", () => {
    const eliminado: boolean =  eliminarContacto(contactos, "kmoss4@geocities.com");
      expect(eliminado).toBe(true);
  });

});

describe("Buscar contacto inexistente", () => {
    test("buscar un contacto que no existe", () => {
      const noEncontrado: boolean = buscarContacto (contactos, "kmoss4@geocities.com");
        expect(noEncontrado).toBe(true);
    });
 });

