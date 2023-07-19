import { useMemo } from "react";

interface Props {
  children: string;
  indent?: boolean;
}

const getIndentClasses = (indent: boolean) => {
  switch (indent) {
    case false: {
      return "";
    }
    case true: {
      return "list-none";
    }
  }
};

const ListItem = ({ children, indent = false }: Props) => {
  const computedClasses = useMemo(() => {
    const indentClass = getIndentClasses(indent);

    return [indentClass].join(" ");
  }, [indent]);

  return <li className={`${computedClasses}`}>{children}</li>;
};

export default ListItem;
