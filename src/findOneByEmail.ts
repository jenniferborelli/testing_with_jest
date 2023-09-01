import { Contacto, contactos } from "./contactos";

const findOneByEmail = (email: string): Contacto => {
    function mismoMail(contacto: Contacto){
        return contacto.email == email;
    }
    const seEncontro = contactos.filter(mismoMail);
    return seEncontro[0];
}
export { findOneByEmail };