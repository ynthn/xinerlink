import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'
import Services from './components/Services'

import empresa from "./assets/empresa-certificada.png";


function App() {

  return (
    <>
      <Header></Header>

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


      <Form></Form>


      <Services></Services>


      <Footer></Footer>
    </>
  )
}

export default App
