# Webpack Documentation
yarn add webpack webpack-cli

# Loader is essential
 yarn add sass style-loader css-loader sass-loader --dev
To compile sass, scss file to csss


# Second to create dynamic html file inside dist folder
For this html-webpack-plugin package is needed
yarn add html-webpack-plugin --dev
1. Create one template file
2. Add HtmlWebpackPlugin under plugins section in webpack setup file


# Caching the file

1. By adding second square bracket in dist file eg: by adding content hash
    [name][contenthash]

# To run application automatically
It means when you type yarn dev and want to open application automatically on the brower webpack config setup can be done.
1. Adding devServer inside webpacksetup file


# Add clean:true inside output file to generate only one bundle file
Otherwise, everytime when you build file it will generate another bundle file inside dist folder


# Set source map in webpack setup (vvimp to debug)
This is very important for to debug code in javascript as it will show line number.
Note: Webpack already comes with this feature
1. Add new key called devtool:'source-map' in webpack setup file


# To make our javascript code compatible with all browser, babel is requiered
For this we need babel package
1. npm i -D babel-loader @babel-core @babel/preset-env --dev
2. Go to webpackconfig -> module -> rules and add new rules


# How to compile images and assets
Note: Webpack already comes with this feature, we need to add rules inside module
    {test:/\.(png|jpg|jpeg|svg|gif)$/, type:'asset/resource' }


# Webpack Analyzer [Userful to analyze which module is taking more memory]
For this we need package [yarn add webpack-bundle-analyzer --dev]