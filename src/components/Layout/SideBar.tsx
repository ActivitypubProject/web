import sidebarConfig from "@/config/sidebarConfig.json";
import Link from "next/link";

export type SidebarItem = {
  title: string;
  icon?: string;
  link: string;
}

const SideBar = () => {
  return (
    <div className="bg-gray-100 border-r border-gray-200 w-64 px-4 pt-4 pb-8">
      {
        sidebarConfig.map((item: SidebarItem) => (
          <Link href={item.link} className="block py-2" key={item.title}>
            {item.title}
          </Link>
        ))
      }
    </div>
  )
}

export default SideBar;