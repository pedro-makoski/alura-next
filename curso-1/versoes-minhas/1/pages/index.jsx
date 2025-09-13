import Link from "next/link";

function HomePage() {
    return <>
        <div>Olá Mundo</div>
        <img src="/images/avatar.jpeg" alt="Imagem do Pedro Makoski" />
        <Link href="/sobre">Ir para a página sobre</Link>
    </>
}

export default HomePage;