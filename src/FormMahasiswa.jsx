import React from 'react';

function FormMahasiswa({ nama, setNama, jurusan, setJurusan, handleSubmit, editData }) {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="input-group">
        <input 
          type="text" 
          placeholder="Nama Mahasiswa" 
          value={nama} 
          onChange={(e) => setNama(e.target.value)} 
          className="input-field"
          required
        />
        <input 
          type="text" 
          placeholder="Jurusan" 
          value={jurusan} 
          onChange={(e) => setJurusan(e.target.value)} 
          className="input-field"
          required
        />
        <button type="submit" className="submit-button">
          {editData ? "Update" : "Daftar"}
        </button>
      </form>
    </div>
  );
}

export default FormMahasiswa;