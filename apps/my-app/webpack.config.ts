import { composePlugins, withNx } from '@nrwl/webpack';
import { withReact } from '@nrwl/react';
// Nx plugins for webpack.
export default composePlugins(
  withNx(),
  withReact(),
  (config, { options, context }) => {
    // Note: This was added by an Nx migration.
    // You should consider inlining the logic into this file.
    // For more information on webpack config and Nx see:
    // https://nx.dev/packages/webpack/documents/webpack-config-setup
    if (config.mode === 'production') {
      console.log('Prod!');
    } else {
      console.log('not prod!');
    }

    return config;
  }
);
