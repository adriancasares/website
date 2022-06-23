import {
  createSignal,
  createContext,
  useContext,
  Accessor,
  Setter,
} from "solid-js";

type Store = [Accessor<boolean>, Setter<boolean>];

const TransitionContext = createContext<Store>();

export function TransitionProvider(props) {
  const [fadePage, setFadePage] = createSignal<boolean>(false);

  const store: Store = [fadePage, setFadePage];

  return <TransitionContext.Provider value={store} children={props.children} />;
}

export function useTransition() {
  return useContext(TransitionContext);
}
