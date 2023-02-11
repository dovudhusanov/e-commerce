import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {LoginApi} from "@/api/LoginApi";
import {loginStart, loginSuccess, logout} from "@/action/AuthLoginAction";
import axiosInstance from "@/api";

function Home() {
    const [value, setValue] = React.useState<string>("")
    const [isSubmitting, setSubmitting] = React.useState(false)
    const [admin, setAdmin] = React.useState();
    const GetPosts = async () => {
        const data = await axiosInstance.get('/auth')
        console.log(data.data)
    }


    React.useEffect(() => {
        if (localStorage.getItem('admin')) {
            setAdmin(JSON.parse(localStorage.getItem('admin') || ''))
            dispatch(loginSuccess(JSON.parse(localStorage.getItem('admin') || '')))
            GetPosts()
        }
    }, [isSubmitting])


    const dispatch = useDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        dispatch(loginStart())
        try {
            const admin = await LoginApi(value)
            dispatch(loginSuccess(admin.data))
            localStorage.setItem("admin", JSON.stringify(admin.data))
            setSubmitting(true)
        } catch (error) {
            console.error(error)
        }
    }

    // const handleLogout = async (e: any) => {
    //     e.preventDefault()
    //     dispatch(logout())
    //     setAdmin()
    //     // @ts-ignore
    //     localStorage.clear("admin")
    // }

    // @ts-ignore
    const userinfo = useSelector(state => state.LoginReducer)

    console.log(userinfo.admin)


    return (
        <>
            {admin ? (
                <>
                    <h1>Hello</h1>
                    {process.env.API_URL}
                    {/*<button onClick={handleLogout}>LogOut</button>*/}
                </>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input type="text" value={value} onChange={(e: any) => setValue(e.value)}/>
                    <button type="submit">Submit</button>
                </form>
            )}
        </>
    )
}

export default Home