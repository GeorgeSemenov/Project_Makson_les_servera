module.exports = function(){
	return {
		module:{
			rules: [//тут указываем массив настроек для лоадеров
				{//Тут описываем настройки лоадера
					test: /\.(eot|svg|ttf|woff|woff2)$/,
					loader:'file-loader',//настраиваем file-loader, чтобы он работал только со шрифтами
					options:{
							publicPath: './fonts/',// данная строка указывает на то, где будет скомпилированные файлы искаться например в данном случае в скомпилированном файле шрифты будут искаться по пути fontsUGoshana/contentHash.extension Эта настройка перебивает настройку outputPath - если в outputPath указан один путь, а в publicPath - другой , то в компилированном файле шрифты будут искаться по адресу указанному в publicPath. Т.к. к шрифтам запрос ведётся из css файла, то нужно указать путь относительно этого файла, а не относительно коревной дирректории
							outputPath: 'fonts'//Указывает место, куда будут сложенны файлы но не обязательно, что там их будут искать скомпеллированные файлы (за это отвечает свойство выше, но если его не указать, то ссылки будут вестись по этому значению) указывает на то, где будет скомпилированные файлы искаться например в данном случае в скомпилированном файле шрифты будут искаться по пути fonts/contentHash.extension
						}
				},
				{
					test:/\.(pdf|mp4)$/,
					loader:'file-loader',
					options:{
						publicPath: './files/',
						outputPath: 'files'
					}
				}
			]
		}
	}
}