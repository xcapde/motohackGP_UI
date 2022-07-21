import { Navbar } from "../../components/navbar/Navbar";

export function Login(){

    return(
        <section>
            <Navbar/>
            <h1 className="login_header"> WELCOME! </h1>

            <form className="login_cnt">                
                <input name="mail" type="text" placeholder="E-Mail" autoFocus />
                <input name="password" type="password" placeholder="Password"/>
                <button className="login_btn" type="submit">LOG IN</button>
            </form>

            <button className="newUser_btn" type="submit">NEW USER</button>

        </section>
    )
}