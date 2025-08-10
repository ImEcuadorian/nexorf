import {MapPin, Phone} from "lucide-react";

const FooterContact = () => {
    return (
        <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <p className="text-gray-400 mb-2 flex items-center">
                <MapPin className="w-4 h-4 mr-2"/> Quito, Ecuador
            </p>
            <p className="text-gray-400 mb-4 flex items-center">
                <Phone className="w-4 h-4 mr-2"/> +593 99 110 7614
            </p>
        </div>
    );
}

export default FooterContact;