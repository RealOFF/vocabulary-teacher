import { setContext, getContext } from "svelte";

export function inject<T>(token: InjectionToken<T>): T {
  const value = getContext<T>(token);
  if (value === undefined) {
    throw new Error(`Token ${token.toString()} not provided`);
  }
  return value;
}

export function provide<T>(token: InjectionToken<T>, value: T) {
  setContext(token, value);
}

export function createToken<T>(name: string) {
  return Symbol(name) as InjectionToken<T>;
}
export type InjectionToken<T> = symbol & { __type?: T };
