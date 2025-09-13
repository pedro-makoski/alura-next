import "./app.css"

function MyApp({Component, pageProps}) {
    return (
        <>
            <p>Texto em todas as páginas</p>
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp