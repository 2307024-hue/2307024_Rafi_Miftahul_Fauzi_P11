import React, { useState, useEffect } from 'react';
import "./App.css"; 
import FormMahasiswa from './FormMahasiswa';
import ListMahasiswa from './ListMahasiswa';

export default function App() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [editData, setEditData] = useState(null);
  
  // State untuk input form
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");

  // Mengisi form saat tombol edit diklik
  useEffect(() => {
    if (editData) {
      setNama(editData.nama);
      setJurusan(editData.jurusan);
    } else {
      setNama("");
      setJurusan("");
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      // Logika Update
      setMahasiswa(mahasiswa.map((m) => (m.id === editData.id ? { ...m, nama, jurusan } : m)));
      setEditData(null);
    } else {
      // Logika Tambah (Daftar)
      const newMahasiswa = { id: Date.now(), nama, jurusan };
      setMahasiswa([...mahasiswa, newMahasiswa]);
    }
    setNama("");
    setJurusan("");
  };

  const deleteMahasiswa = (id) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      setMahasiswa(mahasiswa.filter((m) => m.id !== id));
    }
  };

  return (
    <div className="main-app">
      <h1>Sistem Manajemen Mahasiswa</h1>
      
      <FormMahasiswa 
        nama={nama}
        setNama={setNama}
        jurusan={jurusan}
        setJurusan={setJurusan}
        handleSubmit={handleSubmit}
        editData={editData} 
      />
      
      <ListMahasiswa 
        mahasiswa={mahasiswa} 
        onDelete={deleteMahasiswa} 
        onEdit={setEditData} 
      />
    </div>
  );
}