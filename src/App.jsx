import {useState, useEffect} from 'react'
import Formulario from "./components/Formulario"
import Pacientes from "./components/Pacientes"

function App() {

  const dataLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? []

  const [pacientes, setPacientes] = useState(dataLocalStorage)
  const [paciente, setPaciente] = useState({})


  useEffect(()=>{

    const registrarLocalStorage = () => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }

    registrarLocalStorage()

  },[pacientes])

  const addPaciente = (data) =>{
    data.id = pacientes.length + 1
    setPacientes([...pacientes, data])
  }

  const editPaciente = (data) => {
    setPaciente(data)
    //console.log(data);
  }

  const updatePacientes = (data) => {
    //console.log(data);
    const listaActualizada = pacientes.map((item) => item.id == data.id ? data : item)
    setPacientes(listaActualizada)
    setPaciente({})
  }

  const deletePaciente = (id) => {
    //console.log(id);
    const actualizarLista = pacientes.filter((item) =>  item.id !== id)
    setPacientes(actualizarLista)
  }

  return (
   <>
      <div className="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900">
        <div className="app-preloader-inner relative inline-block h-48 w-48"></div>
      </div>

      <div className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
        <main className="main-content w-full px-[var(--margin-x)] pb-8">
          <div className="flex flex-col items-center justify-between space-y-4 py-5 sm:flex-row sm:space-y-0 lg:py-6">
            <div className="flex items-center space-x-1">
              <h2 className="text-xl font-medium font-bold text-slate-700 line-clamp-1 dark:text-navy-50">
                Gestión de Pacientes
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">

          <div className="col-span-12 lg:col-span-5">
              <Formulario addPaciente={addPaciente} paciente={paciente} updatePacientes={updatePacientes}></Formulario>
            </div>

            <div className="col-span-12 lg:col-span-7">

              <Pacientes
              pacientes={pacientes}
              editPaciente={editPaciente}
              deletePaciente = {deletePaciente}
              ></Pacientes>

            </div>

          </div>
        </main>
      </div>
      <div id="x-teleport-target"></div>
   </>
  )
}

export default App
