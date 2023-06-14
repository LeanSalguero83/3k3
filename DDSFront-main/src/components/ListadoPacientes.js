import React from "react";

const ListadoPacientes = ({ lista }) => {
  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Apellido y Nombre del Paciente</th>
            <th>Numero Historia Clinica</th>
            <th>Domicilio</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
            <tr key={item.IdPaciente}>
              <td>{item.IdPaciente}</td>
              <td>{item.ApeNomPaciente}</td>
              <td>{item.NroHCPaciente}</td>
              <td>{item.DomicilioPaciente}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPacientes;
