import Layout from "@/Layout";
import "@/styles/globals.css";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SnackbarProvider>
    </main>
  );
}
