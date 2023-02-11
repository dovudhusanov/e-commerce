import React, {useState} from "react";
import {useDispatch} from "react-redux";
function Home() {
    const [value, setValue] = useState<string>("")
    const dispatch = useDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault()
    }

    // @ts-ignore
    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default Home