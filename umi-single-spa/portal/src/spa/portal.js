import 'zone.js';
import * as singleSpa from 'single-spa';
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'

export default async function init() {
    const globalEventDistributor = new GlobalEventDistributor();
    const loadingPromises = [];
    let prefix="http://localhost:9001";
   prefix=""
    // app1: The URL "/app1/..." is being redirected to "http://localhost:9001/..." this is done by the webpack proxy (webpack.config.js)
    loadingPromises.push(loadApp('app1', '/app1', prefix+'/app1/singleSpaEntry.js', prefix+'/app1/store.js', globalEventDistributor));

    // app2: The URL "/app2/..." is being redirected to "http://localhost:9002/..." this is done by the webpack proxy (webpack.config.js)
    loadingPromises.push(loadApp('app2', '/app2', prefix+'/app2/singleSpaEntry.js',  prefix+'/app2/store.js', globalEventDistributor));

    // app3: The URL "/app3/..." is being redirected to "http://localhost:9003/..." this is done by the webpack proxy (webpack.config.js)
    loadingPromises.push(loadApp('app3', '/app3', prefix+'/app3/singleSpaEntry.js', null, null)); // does not have a store, so we pass null

    // app3: The URL "/app4/..." is being redirected to "http://localhost:9004/..." this is done by the webpack proxy (webpack.config.js)
    loadingPromises.push(loadApp('app4', '/app4', prefix+'/app4/singleSpaEntry.js', null, null)); // does not have a store, so we pass null

    // app5: The URL "/app5/..." is being redirected to "http://localhost:9005/..." this is done by the webpack proxy (webpack.config.js)
    loadingPromises.push(loadApp('app5', '/app5', prefix+'/app5/singleSpaEntry.js',  prefix+'/app5/store.js', globalEventDistributor));

    // wait until all stores are loaded and all apps are registered with singleSpa
    await Promise.all(loadingPromises);

    singleSpa.start();
}



