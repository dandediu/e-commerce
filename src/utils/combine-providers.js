import React from 'react';

export default function combineProviders(...providers) {
  return ({ children }) =>
    providers.reduce(
      (prev, CurrentProvider) => <CurrentProvider>{prev}</CurrentProvider>,
      children,
    );
}
