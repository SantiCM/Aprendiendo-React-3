import Link from "next/link"
import Image from "next/image"
/*import Fondo from "../public/img.png"*/
/*<Image src={Fondo} width={500} height={300}></Image>*/

export default function Home() {
  return (
    <div>
      <p>Chanchito feliz</p>
      <Link href="/chanchitos">Ir a Chanchitos</Link>
      <Image src="/img.jpg" height={300} width={500}></Image>
    </div>
  )
}
