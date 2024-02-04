import Login from "@/components/demo/login";
import Faq from "@/components/demo/faq";
import { Separator } from "@/components/ui/separator";
import DemoForm from "@/components/demo/demoform";

export default function Home() {
  return (
    <main className="flex flex-col w-auto items-center justify-between p-4 md:p-24">
      <DemoForm />
      <span className="pt-10 pb-10" />
      <Login />
      <span className="pt-10 pb-10" />
      <Faq />
    </main>
  );
}
