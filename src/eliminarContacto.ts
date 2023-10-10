import { Contacto } from "../src/contactos";

function eliminarContacto(contactos: Contacto[], mail: string): boolean {
  const existe = contactos.some((contacto) => contacto.email === mail);
  if (existe) {
    const index = contactos.findIndex((contacto) => contacto.email === mail);
    contactos.splice(index, 1);
    return true;
  } else {
    return false;
  }
}
export { eliminarContacto };
