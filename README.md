# webpack-starter_demo_made_by-@bradtraversy
## Steps of this tuto
#### 0.Create directory dist, index.html, index.js, src(directory), npm init.
#### 1.Webpack installed, build: "webpack" in package.json, 
#### 2.create webpack.config(create the obj) 
#### 3.html updated, changed to bundle.js.., after every modification run: npm run build. 
#### 4.Install some depandency: style-loader, like css etc. npm i -D sass style-loader css-loader sass-loader. 
#### 5.Create main.scss and paste the code and import them index.js import ./styles/main.sccs and set in webpack.cofig.
#### 6.Install HtmlPlugins, npm i -D html-webpack-plugin and configure webpack.config, delete dist. 
#### 7.Use template.html for keeping the app works, could add other tags html and the content in index.html. 
#### 8.Hash the filename. set the configuration in packgage.json filename: [name][contenthash].js.
#### 9.Server time, webpack.config: scripts -dev: "webpack serve". run: npm run dev, then yes - instal webpack server and visite localhost:8080.
#### 10.Add devServer: in webpack.config and run: npm run dev, at port 3000, bingo. 
#### 11. set output: clean: true, for cleaning the bundel.js creating every build. 
#### 12.Add devtool: source-map for debugging. 
#### 13.Add Bable loader for the version, run: npm i -D babel-loader @babel/core @babel/preset-env and add the rules in webpack.config.
#### 14.Add an image, set webpack.config: assetModuleFilename and rules.
#### 15.Get the imags from DOM and put the in the tags(img).
#### 16.Install axio and imporp axios.
#### 17.Add listener au button for refraish the joke. 
#### 18.Install analyzer: npm i -D webpack-bundle-analyzer plugin and set webpack.config for a deep analyse of the app
