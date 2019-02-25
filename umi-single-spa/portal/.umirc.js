
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'portal',
      dll: false,
      routes: {
        exclude: [
        
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
        
          /components\//,
        ],
      },
    }],
  ],
  devServer:{
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
		// Proxy config for development purposes. In production, you would configure you webserver to do something similar.
        proxy: {
            "/app1": {
                target: "http://localhost:9001",
                pathRewrite: {"^/app1" : ""}
            },
            "/app2": {
                target: "http://localhost:9002",
                pathRewrite: {"^/app2" : ""}
            },
            "/app3": {
                target: "http://localhost:9003",
                pathRewrite: {"^/app3" : ""}
            },
            "/app4": {
                target: "http://localhost:9004",
                pathRewrite: {"^/app4" : ""}
            },
            "/app5": {
                target: "http://localhost:9005",
                pathRewrite: {"^/app5" : ""}
            }
        }
    }
}
