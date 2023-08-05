import { User } from "lucide-react";
import Image  from "next/image";0
import nlwLogo from "../assets/nlw-spacetime-logo.svg";


export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/*Left*/}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
      {/*Blur*/}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full" />

      <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes "/ >

      {/*Sing in */}
      <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
          <User className="h-5 w-5 text-gray-500" />
        </div>

        <p className="text-sm leading-snug max-w-[140px]">
          <span className="underline">Crie sua Conta</span> e salve suas memmórias
        </p>
      </a>

      {/*Hero */}
      <div className="space-y-5">
        <Image src={nlwLogo} alt="nlwLogo"></Image>

        <div className="max-w-[420px] space-y-1">
          <h1 className="text-5xl font-bold leading-tight text-gray-50">Sua cápsula do tempo</h1>
          <p className="text-lg leading-relaxed">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
        </div>
        <a href="" className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600">CADASTRAR LEMBRANÇA</a>
      </div>

      {/*Copyright */}
      <div className="text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat</div>
      </div>
      

      {/*Right*/}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou  nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">criar agora!</a>
          </p>
        </div>
      </div>
    </main>
  )
}