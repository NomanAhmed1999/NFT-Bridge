import AppNav from "../AppNav";
import Footer from "../Footer";

export default function Layout({ children }: any) {





    return (<div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 to-pink-300 ">

        <AppNav />
        <main>
            {children}
        </main>
        <Footer />

    </div>


    )

}