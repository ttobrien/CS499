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
    525, 
    500, 
    Surface.SurfaceShape.Flat
  );

  commentPanel.setAngle(
    0.85, 
    0.16
  )

  r360.renderToSurface(
    r360.createRoot('ConnectedComment', {/*initial props*/}),
    commentPanel
  );

  const varPanel = new Surface(
    250, 
    450, 
    Surface.SurfaceShape.Flat
  );

  varPanel.setAngle(
    -0.5, 
    0.22
  )

  r360.renderToSurface(
    r360.createRoot('ConnectedVar', {/*initial props*/}),
    varPanel
  );

  const codePanel = new Surface(
    500, 
    400, 
    Surface.SurfaceShape.Flat
  );

  codePanel.setAngle(
    0.0,
    0.22
  )

  r360.renderToSurface(
    r360.createRoot('ConnectedCode', {/*initial props*/}),
    codePanel
  );

  const controlPanel = new Surface(
    200, 
    50, 
    Surface.SurfaceShape.Flat
  );

  controlPanel.setAngle(
    -.05, 
    0.55
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
    0.0, 
    -0.15
  )

  r360.renderToSurface(
    r360.createRoot('ConnectedStack', {/*initial props*/}),
    stackPanel
  );

  const outputPanel = new Surface(
    250, 
    150, 
    Surface.SurfaceShape.Flat
  );

  outputPanel.setAngle(
    3.14, 
    0.2
  )

  r360.renderToSurface(
    r360.createRoot('ConnectedOutput', {/*initial props*/}),
    outputPanel
  );



  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};

