import React, {useEffect} from 'react'

    const WithCleanUp = () => {
        // Menambahkan useEffect untuk Clean Up
        // Pertama di Eksekusi
        useEffect(() => {
            const id = setInterval(() => {
                console.log("Tick dengan CleanUp");
            }, 1000);
   // Muncul di Console     
  return () => {
    clearInterval(id)
    console.log("CleanUp Dijalankan");
  };
},[]);
// Kedua yang di Eksekusi
// Muncul di Browser / Dapat Dilihat Oleh Pengguna (User)   
return(
<div>
<p>Komponen dengan CleanUp Aktif</p>
</div>
)
    };

export default WithCleanUp;