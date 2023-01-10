import {useEffect, useState} from 'react'
import Alerta from './Alerta'

function Formulario({addPaciente, paciente, updatePacientes}) {

    const [nombre, setNombre] = useState('')
    const [tipo, setTipo] = useState('')
    const [propietario, setPropietario] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState('')

    const [error, setError] = useState(false)

    useEffect(()=>{
        if (Object.keys(paciente).length > 0) {
            //console.log(paciente.nombre);
            setNombre(paciente.nombre)
            setTipo(paciente.tipo)
            setPropietario(paciente.propietario)
            setTelefono(paciente.telefono)
            setFecha(paciente.fecha)
        }
    },[paciente])

    const enviarFormulario = (e) =>{
        e.preventDefault()
        const datosPaciente = {
            nombre,
            tipo,
            propietario,
            telefono,
            fecha
        }

        //Validación
        if ([nombre, tipo, propietario, telefono, fecha].includes("")) {
            setError(true)
            return
        }

        setError(false)

        if (paciente.id) {
            //Editar registro
            datosPaciente.id = paciente.id
            updatePacientes(datosPaciente)
        }else{
            //Crear registro
            addPaciente(datosPaciente)
        }

        setNombre('')
        setTipo('')
        setPropietario('')
        setTelefono('')
        setFecha('')
    }

  return (
    <form onSubmit={enviarFormulario}>
        <div className="card space-y-5 p-4 sm:p-5">

            {error && <Alerta><p>Todos los campos son requeridos</p></Alerta>}

            <label className="block">
                <span className="font-medium text-slate-600 dark:text-navy-100">Nombre</span>
                <input type="text" onChange={(e) => setNombre(e.target.value) } value={nombre} className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Nombre"/>
            </label>

            <label className="block">
                <span className="font-medium text-slate-600 dark:text-navy-100">Category</span>
                <select onChange={(e) => setTipo(e.target.value)} value={tipo} className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent">
                    <option value="">Seleccione tipo</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="ave">Ave</option>
                    <option value="otro">Otro</option>
                </select>
            </label>

            <label className="block">
                <span className="font-medium text-slate-600 dark:text-navy-100">Propietario</span>
                <input onChange={(e) => setPropietario(e.target.value)} value={propietario} type="text" className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Propietario"/>
            </label>

            <label className="block">
                <span className="font-medium text-slate-600 dark:text-navy-100">Teléfono</span>
                <input onChange={(e) => setTelefono(e.target.value)} type="text" value={telefono} className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Teléfono"/>
            </label>

            <label>
                <span className="font-medium text-slate-600 dark:text-navy-100">Fecha</span>
                <span className="relative mt-1.5 flex">
                    <input type="date" onChange={(e) => setFecha(e.target.value)} value={fecha} className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Choose date..."/>
                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"></span>
                </span>
            </label>

            <div className="flex justify-end">
            <button className="btn min-w-[7rem] bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                <i className="fa fa-save mr-1"></i> {paciente.id ? 'Editar' : 'Guardar'}
            </button>
            </div>
        </div>
    </form>
  )
}

export default Formulario