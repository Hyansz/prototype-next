import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
    const router = useRouter();
    const [dataDetail, setDetail] = useState();
    
    const { idDetail } = router.query;

    useEffect(() => {
        if (!idDetail) return;

        fetch(`/api/get-todo-by-id?id=${idDetail}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setDetail(data.data);   
            })
    }, [idDetail])

    return (
        <>
            {dataDetail && <p>Ini Halaman Detail {dataDetail.todo}</p>}
            {dataDetail && <p>Ini Halaman Detail {dataDetail.todo}</p>}
        </>
    );
}
