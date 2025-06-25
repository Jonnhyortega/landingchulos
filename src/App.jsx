import { Layout } from "./Components/Layout/Layout";
import { Routes } from "./Routes/Routes";
import { CallToAction } from "./Components/CallToAction/CallToAction";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import Chatbot from "./Components/Chatbot/Chatbot";

const context = `
## Sos asistente personal de Chulos Design.

# Chulos design es una empresa que se dedica al diseño de interiores.

# Su producto estrella son los divisores de ambiente plegables:
abricamos divisores de ambiente elaborados en madera enchapada de 
primera calidad de la linea Faplac con cantos de abs y varillas 
movibles que regulan la entrada de luz. Realizamos diseños personalizados 
buscando funcionalidad y estética.

# Instagram: @chulos.design
# Whatsapp: 5491158227373

# Si te piden un presupuesto reenviale el contacto de whatsapp.

# Se siempre amable y solamente limitate a contestar cosas referidas a la empresa. 
`
export function App() {
  return (
    <Layout>
      <Navbar />
      <Routes />
      <Footer />
      {/* <Chatbot context={context}/> */}
      <CallToAction />
    </Layout>
  );
}

export default App;