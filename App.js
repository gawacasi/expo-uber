import * as React from 'react';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { func } from './src/constants';

// root stack navigation
import RootStack from './src/navigation/RootStack';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function prepare() {
      try {

        await SplashScreen.preventAutoHideAsync();

        await func.loadAssetsAsync();
      } catch (e) {

      } finally {

        setIsLoading(false);
      }
    }

    prepare();
  }, []);

  React.useEffect(() => {

    if (isLoading === false) {

      const hideSplash = async () => SplashScreen.hideAsync();

      hideSplash();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />

      <RootStack />
    </React.Fragment>
  );
};

export default App;
