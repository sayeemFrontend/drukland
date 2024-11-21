import Link from 'next/link';

const footerItems = [
  { title: 'Terms of Use' },
  { title: 'Sitemap' },
  { title: 'Company information ' },
  { title: 'Cookie settings' },
];

export default function Footer() {
  return (
    <div className="container text-sm leading-[17px] text-black flex gap-4 flex-col md:flex-row items-center md:justify-between border-t-[.6px] border-[#292929] pt-[16px] pb-[64px]">
      <span>All rights reserved © 2024 |  Drukland.de</span>
      <ul className="flex flex-col md:flex-row items-center gap-4 ">
        {footerItems?.map((item, i) => (
          <Link key={i} href="#" className="">
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}
