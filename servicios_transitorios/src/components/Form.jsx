import { useRef, useState } from "react";
import Loader from "./Loader";
import { Dialog } from 'primereact/dialog';

function Form() {
    const [loading, setLoading] = useState(false);
    const URL_API = "https://registros.xinerlink.cl/servicios_transitorios/backend/app.php";
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const companyRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");

    const cleanForm = () => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        companyRef.current.value = "";
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            company: companyRef.current.value,
        };
        console.log(formData);

        try {
            const response = await fetch(URL_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Importante para APIs JSON
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();

            console.log(result);

            if (result.state) {
                cleanForm();
            }
            setLoading(false);
            setMessage(result.message);
            setVisible(true);


        } catch (error) {
            console.error("Error de comunicación:", error);
        }


    }

    return (
        <>
            {loading ? (<Loader></Loader>) : ("")}

            <Dialog header="Aviso" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    {message}
                </p>
            </Dialog>

            <form onSubmit={handleSubmit}>
                <div id="contactanos" className="grid grid-cols-12 gap-4 lg:mt-20">
                    <div className="col-span-1"></div>

                    <div className="grid grid-cols-subgrid gap-4 col-span-10 box-form">
                        <div className="col-span-10 lg:col-span-5">
                            <div className="form-label">
                                <div className="form-title">NOMBRE</div>
                                <input
                                    ref={nameRef}
                                    maxLength={40}
                                    type="text"
                                    className="form-input"
                                    placeholder="Ingresa tu nombre"
                                    required
                                />
                            </div>

                            <div className="form-label">
                                <div className="form-title lg:mt-10">E-MAIL</div>
                                <input
                                    ref={emailRef}
                                    maxLength={40}
                                    type="email"
                                    className="form-input"
                                    placeholder="Ingresa tu e-mail"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-span-10 lg:col-span-5">
                            <div className="form-label">
                                <div className="form-title">EMPRESA</div>
                                <input
                                    ref={companyRef}
                                    maxLength={20}
                                    type="text"
                                    className="form-input"
                                    placeholder="Ingresa el nombre de tu empresa"
                                    required />
                            </div>

                            <div className="form-label">
                                <div className="form-title lg:mt-10">TELÉFONO</div>
                                <input
                                    ref={phoneRef}
                                    maxLength={20}
                                    type="text"
                                    className="form-input"
                                    placeholder="Ingresa tu teléfono"
                                    required />
                            </div>
                        </div>

                    </div>


                    <div className="col-span-1"></div>


                    <div className="col-span-1"></div>
                    <div className="col-span-2 mt-10">
                        <button type="submit" className="form-submit">CONTÁCTANOS</button>
                    </div>
                </div>
            </form>




        </>
    )
}

export default Form
