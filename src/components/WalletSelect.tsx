import { useState, useEffect, useRef } from "react";
import {
  useWallet,
  WalletName,
  WalletReadyState,
} from "@aptos-labs/wallet-adapter-react";

interface WalletLayoutProps {
  grid?: boolean;
  message?: string;
  link?: string;
}

function WalletSelect({ grid, message, link }: WalletLayoutProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [walletSelectorModalOpen, setWalletSelectorModalOpen] = useState(false);
  const { connect, disconnect, account, connected, wallets } = useWallet();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setWalletSelectorModalOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalRef]);

  const onWalletButtonClick = () => {
    if (connected) {
      disconnect();
    } else {
      setWalletSelectorModalOpen(true);
    }
  };

  const onWalletSelected = (wallet: WalletName) => {
    console.log(wallet);
    connect(wallet);
    setWalletSelectorModalOpen(false);
  };

  const accAddress = account?.ansName ? account.ansName : account?.address;

  return (
    <>
      <div>
        <button
          className={`p-4 bg-btn-skin rounded-md text-txt-skin font-bold text-lg`}
          onClick={() => onWalletButtonClick()}
        >
          {connected ? accAddress : "Connect Wallet"}
        </button>
      </div>
      {walletSelectorModalOpen && (
        <div className="flex justify-center mid-[70%] overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative top-4 mx-auto">
            <div
              className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-zinc-800/75 outline-none focus:outline-none "
              ref={modalRef}
            >
              <div className="flex justify-center rounded-t-lg bg-zinc-400/10 py-4 mb-4">
                <span className="font-bold text-3xl text-lime-400 track ">
                  Connect Aptos Wallet
                </span>
              </div>
              {!connected && grid ? (
                <div className="grid grid-cols-2">
                  {wallets.map((wallet) => (
                    <div
                      key={wallet.name}
                      className="cursor-pointer h-24 justify-center max-w-md 
              bg-bg-skin mx-4 my-2 rounded-lg hover:bg-bg-skin/80"
                      onClick={
                        wallet.readyState === WalletReadyState.Installed ||
                        wallet.readyState === WalletReadyState.Loadable
                          ? () => onWalletSelected(wallet.name)
                          : () => window.open(wallet.url)
                      }
                    >
                      <div className="flex flex-col justify-start">
                        <div className="flex flex-row justify-around items-center m-2">
                          <div className="w-8 h-8">
                            <img alt={wallet.name} src={wallet.icon} />
                          </div>
                          <div className="text-base font-bold text-txt-skin">
                            {wallet.name}
                          </div>
                        </div>
                        <div
                          className="m-2 bg-btn-skin rounded-md p-1 px-2 shadow-sm stroke 
         hover:bg-btn-skin/80 flex align-middle justify-center"
                        >
                          {wallet.readyState === WalletReadyState.Installed ||
                          wallet.readyState === WalletReadyState.Loadable ? (
                            <button
                              className="text-sm text-txt-skin text-center"
                              onClick={() => onWalletSelected(wallet.name)}
                            >
                              Connect
                            </button>
                          ) : (
                            <button
                              className="text-sm text-txt-skin"
                              onClick={() => window.open(wallet.url)}
                            >
                              Install
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                wallets.map((wallet) => (
                  <div
                    key={wallet.name}
                    className={`cursor-pointer justify-center max-w-md 
          bg-bg-skin mx-4 my-2 rounded-lg hover:bg-bg-skin/80`}
                    onClick={
                      wallet.readyState === WalletReadyState.Installed ||
                      wallet.readyState === WalletReadyState.Loadable
                        ? () => onWalletSelected(wallet.name)
                        : () => window.open(wallet.url)
                    }
                  >
                    <div className="flex flex-row justify-start items-center">
                      <div className="w-5 h-5 m-4">
                        <img alt={wallet.name} src={wallet.icon} />
                      </div>
                      <div className="flex-1 text-base font-bold text-zinc-700">
                        {wallet.name}
                      </div>
                      <div
                        className={`flex-0 mr-4 bg-btn-skin rounded-md p-1 px-2 shadow-sm stroke 
     hover:bg-btn-skin/80`}
                      >
                        {wallet.readyState === WalletReadyState.Installed ||
                        wallet.readyState === WalletReadyState.Loadable ? (
                          <button
                            className="text-sm text-zinc-800"
                            onClick={() => onWalletSelected(wallet.name)}
                          >
                            Connect
                          </button>
                        ) : (
                          <button
                            className="text-sm text-zinc-800"
                            onClick={() => window.open(wallet.url)}
                          >
                            Install
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
              <div className="flex flex-col justify-start rounded-b-lg bg-zinc-400/10 p-4 mt-4">
                <span className="font-normal text-sm text-lime-400/50 track ">
                  {message ? message : ""}
                </span>

                <a
                  href={link ? link : "#"}
                  className="text-xs font-bold pt-4 text-lime-400/50 underline hover:text-lime-400"
                >
                  Custom Link
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WalletSelect;
