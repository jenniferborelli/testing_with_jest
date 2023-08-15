import { Contacto, contactos } from "./contactos";

function findByEmail(email:string) {

    if (email === "" && ".com")
    {
        return contactos
    }
    function encontrarContacto(contacto: Contacto) {
            return contacto.email === email;
    }

    return contactos.filter(encontrarContacto)
}

export {findByEmail}