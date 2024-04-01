import type { MetaFunction } from "@remix-run/node";

import { FormWizard } from "~/components";
import styles from '~/styles/global.style.css?url';

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Dynamic Data Driven Form | Fahad Ahmed Blob" },
    { name: "description", content: "In this article we will learn about how to create data driven forms by receiving a config from the server and generating the form fields dynamically into various sections. Each section would be validated before proceeding to the next step and the final form would be submitted on last validation." },
  ];
};

export const links = () => {
  return [
    { rel: "stylesheet", href: styles },
  ];
}
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", height: '100%' }}>
      <FormWizard />
    </div>
  );
}
