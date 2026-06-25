
/**
 * 更新代码
 */
function __update__(){
	const jde = Application.JSIDE	// JS宏编辑器对象，该操作需要手动勾选“信任 WPS JS项目的访问”
	const jsComponents = jde.ActiveJSProject.JSComponents	// 当前JS宏工程下的组件集合
	/** 文件系统对象 */
	const fs = FileSystem
	
	const config = {
		/** 需要更新的代码文件夹 */
		'update_folder_path': String.raw`D:\wps-jsaIDE\WPS-JSA\WPS-JSA-Project`,
		/** 不需要同步更新的.js文件 */
		'exclude': new Set([
			'index.js', 
		])
	}
	
	/**
	 * 尝试添加JS宏编辑器内部组件
	 * @param {string} name - 组件名称
	 * @return {JsComponent} 如果组件中不存在 `name`，则创建并返回此对象，否则直接返回此对象，（即无论如何都确保有此组件对象，无则新建的思想）
	 */
	function tryAddJsComponent(name) {
		try {
			return jsComponents.Item(name); 
		} catch {
			let component = jsComponents.Add(1)
			component.Name = name
			return component
		}
	}
	
	const [libDic, jsFileDic] = [{}, {}]
	const parseReg = /(^.+?)(?:(@(?:\d+\.?)+)\.js)?$/
	
	function recode(jsFilePath){
		let newCode = fs
			.ReadFile(jsFilePath)
			.replace(/^import(?=[^\(])/gm, '//import')	// 消除静态import语句
		return newCode
		
	}
	
	for (let i = 1; i <= jsComponents.Count; ++i){
		let { Name: fullname } = jsComponents.Item(i)
		let [ , libName, vcode] = fullname.match(parseReg)	// [ , 库名称, 库版本代号]
		if (vcode)
			libDic[libName] = {fullname, vcode}
	}
	
	fs.readdirSync(config.update_folder_path).forEach(file => {
		if (config.exclude.has(file) || !/\.js$/.test(file)) // 排除不需要更新的文件、非.js文件
			return
			
		let jsFilePath = `${config.update_folder_path}/${file}`
		let code = recode(jsFilePath)
		let [ , libName, vcode] = file.match(parseReg)
		if (libDic[libName]){
			if (libDic[libName].vcode == vcode)
				return
			jsComponents.Remove(jsComponents.Item(libDic.fullname))
		}
		
		let { CodeModule: cm } = tryAddJsComponent(file)
		cm.DeleteLines(1, cm.CountOfLines)	// 删除全部代码
    	cm.AddFromString(code)						// 重新添加
	})
	
	console.log('['+new Date().toLocaleTimeString()+']>执行完成');
    Application.OnTime(new Date(new Date() + 3600000 * 8 + 1000), '__main__')	// 延时1秒后执行 __main__ 函数
}