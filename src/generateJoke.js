import axios from 'axios'

function generateJoke() {

    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
        axios.get('https://icanhazdadjoke.com', config).then( (res) => { document.getElementById('joke').innerHTML = res.data.joke
    })

    console.log('By Subhi');

    console.log('0.Create directory dist.1.Webpack installed, build: "webpack" in package.json, 2.create webpack.config(create the obj), 3.html updated, changed to bundle.js.., after every modification run: npm run build. 4.Install some depandency: style-loader, like css etc. npm i -D sass style-loader css-loader sass-loader. 5.Create main.scss and paste the code and import them index.js import ./styles/main.sccs and set in webpack.cofig. 6.Install HtmlPlugins, npm i -D html-webpack-plugin and configure webpack.config, delete dist. 7.Use template. 8.Hash the filename. filename: [name][contenthash].js. 9.Server time, webpack.config: scripts -dev: "webpack serve". run: npm run dev, then yes - instal webpack server and visite localhost:8080. 10.Add devServer: in webpack.config and run: npm run dev, at port 3000, bingo. 11. set output: clean: true. 12.Add devtool: source-map for debugging. 13.Add Bable loader for the version, run: npm i -D babel-loader @babel/core @babel/preset-env and add the rules in webpack.config.13.Add an image, set webpack.config: assetModuleFilename and rules. 14.Get the imags from DOM and put the in the tags(img). 15.Install axio and imporp axios. 16.Add listener au button. 16.Install analyzer: npm i -D webpack-bundle-analyzer plugin and set webpack.config');

}

export default generateJoke;