import Adaptabilidad from "../assets/Adaptabilidad.png";
import Excelencia from "../assets/Excelencia.png";
import Responsabilidad from "../assets/Responsabilidad.png";
import Integridad from "../assets/Integridad.png";
import Confianza from "../assets/Confianza.png";
import Compromiso from "../assets/Compromiso.png";
import services_1 from "../assets/services/1.png";
import services_2 from "../assets/services/2.png";
import services_3 from "../assets/services/3.png";
import services_4 from "../assets/services/4.png";
import services_5 from "../assets/services/5.png";
import services_6 from "../assets/services/6.png";
import services_7 from "../assets/services/7.png";
import services_8 from "../assets/services/8.png";
import services_9 from "../assets/services/9.png";

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from 'react';

function Services() {

    /**
     * ANIMATION SCROLL CLICK CONTACT
     */
    const scrollToContact = () => {
        const contactSection = document.getElementById('contactanos');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    /**
    * ANIMATION FRAME MOTION
    */
    const refMotion = useRef(null);
    const isInView = useInView(refMotion, { once: true, threshold: 0.3 });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [mainControls, isInView]);
    return (
        <>
            <div className="grid grid-cols-12 gap-4 mt-20 services-box-1">
                <div className="col-span-1"></div>
                <div className="col-span-10">
                    <motion.div
                        ref={refMotion}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <div className="services-title">
                            ¿Por qué contar con nuestros servicios?
                        </div>
                        <div className="services-text mt-10">
                            Al elegirnos, tendrás acceso a talentos preseleccionados y calificados que se integran rápidamente a tu equipo, asegurando que tu operación siga sin interrupciones. Nuestro enfoque fexible y eficiente permite que te concentres en hacer crecer tu negocio mientras nosotros manejamos tus necesidades temporales de personal.
                        </div>
                    </motion.div>

                </div>
                <div className="col-span-1"></div>
            </div>




            <motion.div
                ref={refMotion}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                <div className="grid grid-cols-11 gap-4 services-box-2">



                    <div className="hidden lg:col-span-1 lg:block"></div>

                    <div className="grid grid-cols-subgrid gap-4 col-span-11 lg:col-span-3">
                        <div className="col-span-3 lg:col-span-1">
                            <img src={Adaptabilidad} />
                        </div>
                        <div className="col-span-7 lg:col-span-2">
                            <div className="service-sec2-title">Adaptabilidad</div>
                            <div className="service-sec2-text">Nos adaptamos a los cambios, desafíos y necesidades de nuestros clientes y organización.</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-subgrid gap-4 col-span-11 lg:col-span-3">
                        <div className="col-span-3 lg:col-span-1">
                            <img src={Responsabilidad} />
                        </div>
                        <div className="col-span-7 lg:col-span-2">
                            <div className="service-sec2-title">Responsabilidad</div>
                            <div className="service-sec2-text">Cumplimos nuestras obligaciones y asumimos la responsabilidad por nuestras decisiones, actos y omisiones.</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-subgrid gap-4 col-span-11 lg:col-span-3">
                        <div className="col-span-3 lg:col-span-1">
                            <img src={Excelencia} />
                        </div>
                        <div className="col-span-7 lg:col-span-2">
                            <div className="service-sec2-title">Excelencia</div>
                            <div className="service-sec2-text">Cumplimos nuestras obligaciones asumiendo responsabilidad por nuestras decisiones, actos y omisiones.</div>
                        </div>
                    </div>

                    <div className="hidden lg:col-span-1 lg:block"></div>



                    <div className="hidden lg:col-span-12 lg:block mt-10"></div>



                    <div className="hidden lg:col-span-1 lg:block"></div>

                    <div className="grid grid-cols-subgrid gap-4 col-span-11 lg:col-span-3">
                        <div className="col-span-3 lg:col-span-1">
                            <img src={Integridad} />
                        </div>
                        <div className="col-span-7 lg:col-span-2">
                            <div className="service-sec2-title">Integridad</div>
                            <div className="service-sec2-text">Actuamos conforme a las normas éticas y sociales, con corrección, honestidad y transparencia.</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-subgrid gap-4 col-span-11 lg:col-span-3">
                        <div className="col-span-3 lg:col-span-1">
                            <img src={Confianza} />
                        </div>
                        <div className="col-span-7 lg:col-span-2">
                            <div className="service-sec2-title">Confianza</div>
                            <div className="service-sec2-text">Actuamos con seguridad, honestidad y capacidad técnica, tanto individual como colectivamente.</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-subgrid gap-4 col-span-11 lg:col-span-3">
                        <div className="col-span-3 lg:col-span-1">
                            <img src={Compromiso} />
                        </div>
                        <div className="col-span-7 lg:col-span-2">
                            <div className="service-sec2-title">Compromiso</div>
                            <div className="service-sec2-text">Cumplimos nuestros compromisos y promesas puntualmente con clientes, empleados y accionistas.</div>
                        </div>
                    </div>

                    <div className="hidden lg:col-span-1 lg:block"></div>
                </div>
            </motion.div>









            <div className="grid grid-cols-12 gap-4 mt-20">
                <div className="col-span-1"></div>

                <div className="col-span-10">
                    <motion.div
                        ref={refMotion}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <div className="service-sec3-title">
                            ¿Te interesan nuestros servicios?
                        </div>
                        <div className="service-sec3-text">
                            ¡Este es el momento para que
                            hablemos!
                        </div>
                        <div className="text-center mt-10">
                            <a onClick={scrollToContact} className="service-sec3-btn">CONTACTANOS</a>
                        </div>
                    </motion.div>

                </div>

                <div className="col-span-1"></div>
            </div>












            <div className="grid grid-cols-12 gap-4 mt-20">
                <div className="col-span-1"></div>

                <div className="col-span-10">
                    <motion.div
                        ref={refMotion}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <div className="service-sec4-title">
                            Algunos de nuestros servicios
                        </div>
                    </motion.div>

                </div>

                <div className="col-span-1"></div>
            </div>





            <div className="grid grid-cols-11 gap-6 mt-10 pl-8 lg:pl-0 pr-8 lg:pr-0">


                <div className="hidden lg:col-span-1 lg:block"></div>

                <div className="col-span-12 lg:col-span-3">
                    <motion.div
                        ref={refMotion}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <img src={services_7} />
                        <div className="service-sec4-text">Facility Services</div>
                    </motion.div>
                </div>


                <div className="col-span-12 lg:col-span-3">
                    <motion.div
                        ref={refMotion}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <img src={services_8} />
                        <div className="service-sec4-text">Servicios Hotelería</div>
                    </motion.div>
                </div>

                <div className="col-span-12 lg:col-span-3">
                    <motion.div
                        ref={refMotion}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <img src={services_3} />
                        <div className="service-sec4-text">Personal Salud</div>
                    </motion.div>
                </div>








                <div className="hidden lg:col-span-1 lg:block"></div>
                <div className="hidden lg:col-span-1 lg:block"></div>







                <div className="col-span-12 lg:col-span-3">
                    <motion.div
                        ref={refMotion}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <img src={services_4} />
                        <div className="service-sec4-text">Personal Administrativo</div>
                    </motion.div>
                </div>

                <div className="col-span-12 lg:col-span-3">
                    <motion.div
                        ref={refMotion}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <img src={services_5} />
                        <div className="service-sec4-text">Contact Center Atención Digital</div>
                    </motion.div>
                </div>

                <div className="col-span-12 lg:col-span-3">
                    <motion.div
                        ref={refMotion}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <img src={services_6} />
                        <div className="service-sec4-text">Gestión Documental RPA</div>
                    </motion.div>
                </div>







                <div className="hidden lg:col-span-1 lg:block"></div>
                <div className="hidden lg:col-span-1 lg:block"></div>







                <div className="col-span-12 lg:col-span-3">
                    <motion.div
                        ref={refMotion}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <img src={services_1} />
                        <div className="service-sec4-text">Personal Minería</div>
                    </motion.div>
                </div>

                <div className="col-span-12 lg:col-span-3">
                    <motion.div
                        ref={refMotion}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <img src={services_2} />
                        <div className="service-sec4-text">Personal Paro de Planta</div>
                    </motion.div>
                </div>

                <div className="col-span-12 lg:col-span-3">
                    <motion.div
                        ref={refMotion}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <img src={services_9} />
                        <div className="service-sec4-text">Personal Seguridad</div>
                    </motion.div>
                </div>

                <div className="hidden lg:col-span-1 lg:block"></div>




            </div>

        </>
    )
}

export default Services
