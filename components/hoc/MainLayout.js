import SiteFooter from "../layouts/SiteFooter"
import SiteHeader from "../layouts/SiteHeader"

const MainLayout = (props) => {
    return (
        <main className="site-main">
            <SiteHeader></SiteHeader>
            <main className="site-content">
                {props.children}
            </main>
            <SiteFooter></SiteFooter>
        </main>
    )
}

export default MainLayout
