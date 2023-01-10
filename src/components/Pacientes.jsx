import Paciente from "./Paciente"

function Pacientes({pacientes, editPaciente, deletePaciente}) {

    if (pacientes.length == 0) {
        return(
        <div className="alert flex justify-center space-x-2 rounded-lg border border-error px-4 py-4 text-error">
            <p>No hay resgistros</p>
        </div>
        )
    }

  return (
    <>
    {pacientes.map((paciente)=>(
        <div key={paciente.id} className="card items-center my-1 justify-between lg:flex-row">
            <Paciente
            paciente={paciente}
            editPaciente={editPaciente}
            deletePaciente={deletePaciente}
            ></Paciente>
        </div>
    ))}
    </>
  )
}

export default Pacientes