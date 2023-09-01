import { Contacto, contactos } from "./contactos";
const updateIPAddress = (contactos : Contacto[]) : Contacto[] => {
    contactos.forEach (coontactoo => {coontactoo.ip_address = coontactoo.ip_address + "." + coontactoo.id})
    return contactos 
    }











export { updateIPAddress };