import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery | Prem Palhade",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
