import localFont from "next/font/local";
import { Handlee } from "next/font/google";

const mixbox = localFont({
  src: "fonts/Mixbox Stamp Italic Demo.otf",
});

const handlee = Handlee({ weight: "400", subsets: ["latin"] });

// const agencyFont = localFont({ src: "fonts/OPTIAgency-Gothic.ttf.woff" });

export { mixbox, handlee};