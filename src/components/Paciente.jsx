function Paciente({paciente, editPaciente,deletePaciente}) {

    const {id, nombre, tipo, propietario, telefono, fecha} = paciente

  return (
    <div className="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left">
        <div className="avatar h-18 w-18 lg:h-12 lg:w-12">
            <img className="rounded-full" src="images/200x200.png" alt="avatar"/>
        </div>
        <div className="mt-2 lg:mt-0">
            <div className="flex items-center justify-center space-x-1">
                <h4 className="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                    {nombre}
                </h4>
                <button className="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex">
                    {tipo}
                </button>
            </div>
            <p className="text-xs+">{propietario}</p>
            <p className="text-xs+">{telefono}</p>
            <p className="text-xs+">{fecha}</p>
        </div>
        <div className="">
            <button onClick={()=>editPaciente(paciente)} className="btn min-w-[7rem] mr-1 border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                Editar
            </button>
            <button onClick={()=>deletePaciente(paciente.id)} className="btn border border-warning font-medium text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90">
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente