// import { useAutoConnect } from "./context/AutoConectProvider";
import WalletSelect from "./components/WalletSelect";

function App() {
  //   const { autoConnect, setAutoConnect } = useAutoConnect();

  return (
    <>
      <div className="h-screen mx-auto bg-zinc-950 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-lime-300 tracking-wide">
          Aptos Wallet Selector
        </h1>
        <p className="py-12 text-lime-600 font-normal text-lg">
          Built with React, Vite, TypeScript and TailwindCSS.
        </p>
        <WalletSelect
          grid={false}
          message="Here you can paste a custom message for a user, by passing a
                  prop message into component"
        />
      </div>
    </>
  );
}

export default App;
