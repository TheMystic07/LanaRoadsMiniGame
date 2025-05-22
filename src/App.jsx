import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { sdk } from '@farcaster/frame-sdk'
import { useEffect } from "react";
 


function App() {

  
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/DevBuildFarcaster.loader.js",
    dataUrl: "Build/DevBuildFarcaster.data",
    frameworkUrl: "Build/DevBuildFarcaster.framework.js",
    codeUrl: "Build/DevBuildFarcaster.wasm",
  });

  useEffect(() => {
    sdk.actions.ready().then(() => {
      console.log("sdk ready");
    });
  }, []);

  return <Unity unityProvider={unityProvider} style={{ height: "100%", width: "100%" }} />;
}

export default App;