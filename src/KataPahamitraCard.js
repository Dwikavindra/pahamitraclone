function KataPahamitraCard() {
  return (
    <div class="bg-white flex flex-col w-[25%] ml-[10%] rounded-3xl ">
      <KataPahamitraCardName></KataPahamitraCardName>
      <div class="ml-5 mr-5 text-left text-[16px] mt-5 mb-5 text-gray-600">
        <p>
          Incididunt eu sunt sit reprehenderit qui aute fugiat Lorem aliquip. Eu
          cillum duis labore ipsum incididunt proident nostrud ea enim ut
          ullamco proident aute nisi. Nostrud dolore do aliquip dolor. Sit
          aliqua aliqua nisi nisi quis exercitation est duis tempor do veniam
          nostrud esse eiusmod. Et amet laborum voluptate nisi aute dolore
          veniam mollit. Aliqua sit duis proident fugiat. Esse officia enim
          aliqua nisi in magna laborum non amet aliqua proident anim.
        </p>
      </div>
    </div>
  );
}
export default KataPahamitraCard;

function KataPahamitraCardName() {
  return (
    <div class="flex flex-row">
      <div class="ml-5 mt-2">
        <img
          class="rounded-full border border-gray-100 shadow-sm w-[80px] h-[80px]"
          src="https://randomuser.me/api/portraits/women/81.jpg"
          alt="user image"
        />
      </div>
      <div class="flex flex-col">
        <h2 class="mt-2 ml-3 text-[21px] text-left">Anindita Senaputri</h2>
        <h2 class="mt-1 ml-3 text-[12px] text-left">PFMANINDITASE</h2>
      </div>
    </div>
  );
}
