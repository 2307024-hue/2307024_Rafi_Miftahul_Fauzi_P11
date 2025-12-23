import React from "react";

function ListMahasiswa({ mahasiswa, onDelete, onEdit }) {
  return (
    <div className="grid-container">
      {mahasiswa.map((m) => (
        <div key={m.id} className="card">
          <label>Nama Mahasiswa</label>
          <h3>{m.nama}</h3>
          
          <label>Program Studi</label>
          <p>{m.jurusan}</p>
          
          <label>Kelola Data</label>
          <div className="btn-group">
            <button className="btn-edit" onClick={() => onEdit(m)}>Edit</button>
            <button className="btn-delete" onClick={() => onDelete(m.id)}>Hapus</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListMahasiswa;