"use client";

import {
  Dispatch,
  SetStateAction,
  Suspense,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";

import Preloader from "@/widgets/Preloader/Preloader";

interface PreloaderContextType {
  isLoaded: boolean;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
  timeout: number;
  setPreloaderTimeout: Dispatch<SetStateAction<number>>;
}

const PreloaderContext = createContext<PreloaderContextType>({
  isLoaded: false,
  setIsLoaded: () => {},
  timeout: 500,
  setPreloaderTimeout: () => {},
});

export const usePreloader = () => useContext(PreloaderContext);

function PreloaderContent({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [timeout, setPreloaderTimeout] = useState(500);
  const [isPreloaderShown, setIsPreloaderShown] = useState(true);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), timeout);
    setTimeout(() => setIsPreloaderShown(false), 1000);
    return () => clearTimeout(timer);
  }, [pathname, searchParams, timeout]);

  useEffect(() => {
    if (isLoaded) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isLoaded]);

  return (
    <PreloaderContext.Provider
      value={{ isLoaded, setIsLoaded, timeout, setPreloaderTimeout }}
    >
      <div className="relative overflow-clip">
        {children}
        <Preloader
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
          timeout={timeout}
          setPreloaderTimeout={setPreloaderTimeout}
        />
      </div>
    </PreloaderContext.Provider>
  );
}

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <PreloaderContent>{children}</PreloaderContent>
    </Suspense>
  );
}
