import { Configuration } from 'webpack';

export default function (configuration: Configuration) {
  if (configuration.mode === 'production') {
    console.log('Prod!');
  } else {
    console.log('not prod!');
  }

  return configuration;
}
