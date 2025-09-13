import Link from "next/link";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();

  return (
    <div>
      Id do post atual: {router.query.slug}
      <ul>
        <li>
          <Link href="/"> Ir para a home</Link>
        </li>
        <li>
          <Link href={`${router.query.slug}/comentarios`}>Ir para comentarios</Link>
        </li>
      </ul>
    </div>
  );
}