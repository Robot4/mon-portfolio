/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_SERVICE_ID: 'service_q2hmjzz';
  readonly VITE_APP_TEMPLATE_ID: 'template_gh0tm07';
  readonly VITE_APP_EMAILJS_KEY: 'dCI5CnkaWRkBxIlqc';
  readonly VITE_APP_EMAILJS_RECIEVER: "mehdi.hail.33@gmail.com";

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
