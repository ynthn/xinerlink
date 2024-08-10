import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'
import Services from './components/Services'

import empresa from "./assets/empresa-certificada.png";

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from 'react';

function App() {

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
      <motion.div
        ref={refMotion}
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Header></Header>
      </motion.div>


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
        <div className="grid grid-cols-12 gap-4 mt-8">
          <div className="col-span-1"></div>
          <div className="col-span-12 lg:col-span-8 about-us p-4">
            En <b>XinerLink</b> somos expertos en externalización de personal y servicios
            Outsourcing. Ponte en contacto con nosotros y cuéntanos cuales son tus
            necesidades.
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-12 lg:col-span-1  m-auto lg:m-0">
            <img src={empresa} className="content-end w-fit" />
          </div>
          <div className="col-span-1"></div>
        </div>
      </motion.div>



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
        <Form></Form>

      </motion.div>


      <Services></Services>


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
        <Footer></Footer>
      </motion.div>



    </>
  )
}

export default App
