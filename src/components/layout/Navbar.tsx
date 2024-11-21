import Link from 'next/link';
import DownIcon from '@/assets/icons/downArrow.svg';
import SearchInput from '../common/SearchInput';
import PersonIcon from '@/assets/icons/Person.svg';
import ContainerIcon from '@/assets/icons/container.svg';
import CardIcon from '@/assets/icons/card.svg';
const navItems = [
  { title: 'Business', subItems: [] },
  { title: 'Products', subItems: [] },
  { title: 'About', subItems: null, href: 'about' },
];

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="container flex flex-wrap items-center py-2.5">
        <h2 className="text-[40px] font-semibold mr-24">Drukland.de</h2>
        <div className="text-base flex-1 flex flex-wrap gap-4 items-center">
          {navItems?.map((item, i) =>
            item.subItems ? (
              <ul key={i} className="flex  items-center gap-1">
                <li>{item.title}</li>
                <DownIcon />
              </ul>
            ) : (
              <Link key={i} href={item.href}>
                {item.title}
              </Link>
            )
          )}
          <div className="flex-1">
            <SearchInput />
          </div>
          <ul className="flex items-center gap-3">
            <ContainerIcon />
            <PersonIcon />
            <CardIcon />
          </ul>
        </div>
      </div>
    </nav>
  );
}
