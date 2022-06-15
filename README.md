# Demo for bug with WDYR + React.lazy

## Without WDYR

1. Clone
2. `npm install`
3. `npm start`

By default everything works.

## With WDYR

Enable WDYR with `const wdyrEnabled = true;` in [`src/index.tsx`](src/index.tsx).

In the WDYR docs, it is guarded by `NODE_ENV=development`. Our teams use an environment variable. Either way the point is, sometimes it's on; sometimes it's off.

1. Set `wdyrEnabled = true`
2. `npm start`
3. Open dev console in the browser.
4. Reload the page or click the `Hello World` link. Before long, you will see hook ordering issues.
