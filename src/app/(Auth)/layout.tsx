import { ReactElement } from "react";
import LayoutClient from "./LayoutClient";

export default function Layout({ children }: { children: ReactElement }) {
  return <LayoutClient>{children}</LayoutClient>
}
