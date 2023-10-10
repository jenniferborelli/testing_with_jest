import { Contacto } from "../src/contactos";

function buscarContacto(contactos: Contacto[], mail: string): boolean {
  return contactos.some((contacto) => contacto.email === mail);
}

export { buscarContacto };
