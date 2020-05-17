/**
 * 默认情况下webpack会把要加载的模块从硬盘上读出来，然后变成一个utf8字符串
 * @param  source
 * getOptions 获取选项对象
 */
let { getOptions, interpolateName } = require('loader-utils');
function loader(source) {
    //this loaderContext上下对象，里面有很多的属性和值
    //面loader plugin
    // json 我需要对它进行过滤  有些模块没有现成的loader去处理，就需要自己写
    console.log('这是在使用我自己的file-loader');
    let options = getOptions(this);
    console.log('options', options);
    // interpolate转译的意思 把一个模板变量字符串 转成一个字符串
    let filename = interpolateName(this, "[hash].[ext]", { content: source });
    this.emitFile(filename, source);
    return `module.exports = {default: ${JSON.stringify(filename)}}`;
}
//只要说loader.raw 等于true就是告诉webpack,请不要把模块内容 转成字符，给我Buffer
loader.raw = true;
module.exports = loader;
//loader只有一个功能就是转换代码 只是创建模块的用的
//plugin贯穿整个webpack生命周期的，功能非常强大
//后面我们也会讲 babel-plugin-import实现
