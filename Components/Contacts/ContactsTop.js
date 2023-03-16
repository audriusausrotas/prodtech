export default function ContactsTop() {
  return (
    <div>
      <div className="relative w-full h-[506px] text-white bg-black05 flex flex-col text-center items-center justify-center">
        <div className="bg-[url('/t.jpg')] w-full h-[506px] mix-blend-overlay absolute"></div>
        <h1 className="p-8 text-6xl">Contact Us</h1>
        <p className="text-xl max-w-[28rem] leading-10">
          We are here to assist. Contact us via phone, email, or visit us at our
          main office.
        </p>
      </div>
    </div>
  );
}
