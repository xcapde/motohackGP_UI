import { Navbar } from "../../components/navbar/Navbar";

export function Login(){

    return(
        <section>
            <Navbar/>
            <h1> WELCOME! </h1>

            <form className="login_cnt">                
                <input name="name" type="text" placeholder="Name"/>
                <input name="surname" type="text" placeholder="Surname"/>
                <input name="mail" type="text" placeholder="E-Mail"/>
                <input name="password" type="password" placeholder="Password"/>
                <input name="password" type="password" placeholder="Repeat your password"/>
                <button type="submit">LOG IN</button>
            </form>

            <button type="submit">NEW USER</button>

        </section>
    )
}