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
    0.95, 
    0.2
  )

  r360.renderToSurface(
    r360.createRoot('ConnectedComment', {/*initial props*/}),
    commentPanel
  );

  const codePanel = new Surface(
    1000, 
    600, 
    Surface.SurfaceShape.Flat
  );

  codePanel.setAngle(
    0.25,
    0.10
  )

  r360.renderToSurface(
    r360.createRoot('ConnectedCode', {/*initial props*/}),
    codePanel
  );

  const controlPanel = new Surface(
    1000, 
    600, 
    Surface.SurfaceShape.Flat
  );

  controlPanel.setAngle(
    0.4, 
    0.3
  )

  r360.renderToSurface(
    r360.createRoot('ConnectedControl', {/*initial props*/}),
    controlPanel
  );

  const stackPanel = new Surface(
    1000, 
    50, 
    Surface.SurfaceShape.Flat
  );

  stackPanel.setAngle(
    0.1, 
    -0.1
  )

  r360.renderToSurface(
    r360.createRoot('ConnectedStack', {/*initial props*/}),
    stackPanel
  );



  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};

