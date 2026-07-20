import ArrivalRoom from "@/components/experience/arrival/ArrivalRoom";
import PhilosophyRoom from "@/components/experience/philosophy/PhilosophyRoom";
import LifestyleRoom from "@/components/experience/lifestyle/LifestyleRoom";
import EngineeringRoom from "@/components/experience/engineering/EngineeringRoom";
import WhyRoom from "@/components/experience/why/WhyRoom";
import ConversationRoom from "@/components/experience/conversation/ConversationRoom";

export default function HomePage() {
  return (
    <>
      <ArrivalRoom />
      <PhilosophyRoom />
      <LifestyleRoom />
      <EngineeringRoom />
      <WhyRoom />
      <ConversationRoom />
    </>
  );
}