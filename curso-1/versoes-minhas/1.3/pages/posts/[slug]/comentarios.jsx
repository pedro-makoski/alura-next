import { useRouter } from 'next/router'
import Link from 'next/link'    

export default function Post() {
    const router = useRouter();
    
    return (
        <div>
            <p>Página de comentários do: {router.query.slug}</p>
        
            <Link href="/">Ir para home</Link>
        </div>
    )
}