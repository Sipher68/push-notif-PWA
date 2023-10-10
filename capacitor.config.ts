import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.push.notif',
  appName: 'frontend',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
