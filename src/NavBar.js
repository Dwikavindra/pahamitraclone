function NavBar() {
  return (
    <div class="fixed flex bg-blue-500  rounded-bl-3xl rounded-br-3xl left-0 right-0 flex-row">
      <div class="flex ml-20 pt-10 pb-8">
        <img
          src="https://pahamify.com/wp-content/uploads/2020/11/pahamify-white-logo.svg"
          class="h-10 w-50"
        ></img>
      </div>
      <div class="flex ml-[200px] flex-row space-x-10">
        <nav class="pt-[50px]">
          <bold class="text-white">Produk</bold>{" "}
        </nav>
        <nav class="pt-[50px]">
          <bold class="text-white">Paket Belajar</bold>{" "}
        </nav>
        <nav class="pt-[50px]">
          <bold class="text-white">Untuk Orang Tua</bold>
        </nav>
        <nav class="pt-[50px]">
          <bold class="text-white">Untuk Guru</bold>
        </nav>
        <nav class="pt-[50px]">
          <bold class="text-white">Mitra</bold>
        </nav>
        <nav class="pt-[50px]">
          <bold class="text-white">Artikel</bold>
        </nav>
      </div>
      <div class="pt-[45px] ml-[190px] ">
        <button class="text-white border-2 rounded-full w-40 text-center pb-1 pt-1">
          <bold class="pl-2 text-[13px] ">Download</bold>
        </button>
      </div>
    </div>
  );
}
export default NavBar;
