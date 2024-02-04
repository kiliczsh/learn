import Login from "@/components/demo/login";
import Faq from "@/components/demo/faq";

export default function Home() {
  return (
    <main className="flex flex-col w-auto items-center justify-between p-4 md:p-24">
      <Login />
      <span className="pt-10 pb-10" />
      <Faq />
    </main>
  );
}
