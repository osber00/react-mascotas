function Alerta({children}) {
  return (
    <div className="alert flex justify-center space-x-2 rounded-lg border border-error px-4 py-4 text-error">
        {children}
    </div>
  )
}

export default Alerta