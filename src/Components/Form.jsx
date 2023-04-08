import React, {useState} from "react";


const Form = () => {

    const [confirmation, setConfirmation] = useState('');

    const [message, setMessage] = useState({
        messageName: '',
        messageEmail: ''
    });
    const [contact, setContact] = useState({
        fullName: '',
        email: ''
    });


    //Aqui deberan implementar el form completo con sus validaciones

    const handlerSummitForm = (e) => {
        e.preventDefault();

        const fullNameRegex = /[^/\s][^0-9]+[A-Za-z]+[/\s]+[A-Za-z]/g;
        const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        if (emailRegex.test(contact.email)) {
            if (fullNameRegex.test(contact.fullName) && contact.fullName.length > 5) {
                setConfirmation(`Gracias ${contact.fullName} , te contactaremos cuanto antes vía mail`);
                setContact({
                    fullName: '',
                    email: ''
                })

            } else {
                setMessage({...message, messageName: 'Escriba su nombre completo'});
            }
        } else {
            setMessage({...message, messageEmail: 'Verifique su direccion de correo'});
        }

    }

    return (
        <div>
            <form onSubmit={handlerSummitForm}>
                <input
                    type="text"
                    placeholder="nombre"
                    value={contact.fullName}
                    onChange={(e) => {
                        setContact({...contact, fullName: e.target.value});
                        setMessage({...message, messageName: ''});
                        setConfirmation('');
                    }
                    }/>
                {message.messageName}
                <input
                    type="text"
                    placeholder="myemeil@email.com"
                    value={contact.email}
                    onChange={(e) => {
                        setContact({...contact, email: e.target.value});
                        setMessage({...message, messageEmail: ''});
                        setConfirmation('');
                    }
                    }/>
                {message.messageEmail}
                <button>Send</button>
            </form>
            <h2>{confirmation}</h2>
        </div>
    );
};

export default Form;
