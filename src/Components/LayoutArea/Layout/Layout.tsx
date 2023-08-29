import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Main from "../Main/Main"
import Routing from "../Routing/Routing"
import "./Layout.css"
function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>
            <aside>
                <Main />
            </aside>
            <main>
                <Routing />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout