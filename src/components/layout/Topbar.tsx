import QuesIcon from '@/assets/icons/questionLine.svg';
import MailIcon from '@/assets/icons/mail.svg';
import ChatIcon from '@/assets/icons/chatText.svg';
import ContactIcon from '@/assets/icons/contact.svg';
const items = [
  { title: 'FAQ', icon: <QuesIcon /> },
  { title: 'Send Inquiry', icon: <MailIcon /> },
  { title: 'Live Support', icon: <ChatIcon /> },
  { title: 'Contact', icon: <ContactIcon /> },
];
export default function TopBar() {
  return (
    <nav className=" container flex items-center flex-wrap justify-end gap-4 py-4">
      {items?.map((item, i) => (
        <ul key={i} className="flex items-center gap-1 text-[#0B0B0B] text-xs">
          <li>{item.title}</li>
          {item.icon}
        </ul>
      ))}
    </nav>
  );
}
