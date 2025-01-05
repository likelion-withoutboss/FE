import { IconType } from "react-icons";
import cx from "classnames";

interface IconProps {
  href: string;
  backgroundColor: string;
  icon: IconType;
}

const Icon = ({ href, icon: IconComponent }: IconProps) => {
  return (
    <a
      className={cx({ "cursor-pointer": href })}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {IconComponent && <IconComponent size="26" />}{" "}
      {/* IconComponent를 사용하여 아이콘 렌더링 */}
    </a>
  );
};

export default Icon;
