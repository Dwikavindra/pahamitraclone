import KataPahamitraCard from "./KataPahamitraCard";
function KataPahamitra() {
  return (
    <div class="flex flex-col justify-center bg-blue-300 rounded-3xl">
      <div class="justify-center text-center mt-28 mb-28">
        <h2 class="text-center text-[32px] text-blue-700">Kata Pahamitra</h2>
      </div>
      <div class="flex justify-items-center flex-row space-x-20 mr-10 mb-10">
        <KataPahamitraCard></KataPahamitraCard>
        <KataPahamitraCard></KataPahamitraCard>
        <KataPahamitraCard></KataPahamitraCard>
      </div>
    </div>
  );
}

export default KataPahamitra;
