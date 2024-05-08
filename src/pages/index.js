import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  const [dataDetail, setDetail] = useState();
  
  useEffect(() => {
    fetch(`/api/read-all-todos?status=0`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data) {
          console.log(data.data.length ? true : false);
          setDetail(null);
          return;
        }
        setDetail(data.data);
      })
      .catch((err) => {
        alert("Hubungi saya nek error")
        console.log("Gada Data jadinya error", err.message);
      })
  }, [])
  
  const handleTodo = (event) => {
    event.preventDefault();
    alert("cek 0")
    fetch(`/api/read-all-todos?status=0`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        alert("Hubungi saya nek error")
        console.log("Gada Data jadinya error", err.message);
      })
  }
  
  const handleDone = (event) => {
    event.preventDefault();
    alert("cek 1")
  }

  const handleDelete = (id) => {
    alert("delete")
    const dataBody = JSON.stringify({id});
    fetch(`/api/delete-todo-by-id`, {
      method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', //wajib ada
        },
        body: dataBody
    })
  }

  return (
    <>
      <button onClick={handleTodo}>0 (belum dikerjakan)</button>
      <button onClick={handleDone}>1 (sudah dikerjakan)</button>
      <br/>
      <button onClick={() => {
        router.push('/add-data')
      }}>Add Data</button>
      {dataDetail === undefined && <p>Loading...</p>}
      {dataDetail === null && <p>Data Kosong</p>}
      {dataDetail && <div>{dataDetail.map((data, index) => {
        return (
          <div key={index}>
            {data.id}
            {data.todo}
            <button onClick={() => {
              router.push(`/edit/${data.id}`)
            }}>edit</button>
            <button onClick={() => {
              handleDelete(data.id)
            }}>hapus</button>
            <button onClick={() => {
              router.push(`/detail/${data.id}`)
            }}>detail</button>
          </div>
        )
      })}</div>}
      <h1 className="bg-blue-500 text-center text-3xl font-bold text-red-300 p-4">Ini Halaman Utama</h1>
    </>
  );
}
