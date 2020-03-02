// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const commentPanel = new Surface(
    1000, 
    600, 
    Surface.SurfaceShape.Flat
  );

  commentPanel.setAngle(
    0.4, 
    0.0
  )

  const codePanel = new Surface(
    1000, 
    600, 
    Surface.SurfaceShape.Flat
  );

  codePanel.setAngle(
    -0.4, 
    -0.0
  )

  r360.renderToSurface(
    r360.createRoot('ConnectedComment', {/*initial props*/}),
    commentPanel
  );

  r360.renderToSurface(
    r360.createRoot('ConnectedCode', {/*initial props*/}),
    codePanel
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
