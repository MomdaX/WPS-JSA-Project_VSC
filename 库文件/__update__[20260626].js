Attribute Module_Name = "__update__"
/**
 * 外部代码迁移到宏编辑器中，于工作簿界面可以 Ctrl + Q 运行本函数
 * @since 2.0[2026/6/26]
 */
function __update__() {
	/** 配置项 */ const config = {
		/** 默认更新的代码文件夹 */
		'default_update_folder_path': String.raw`C:\Users\ming\Desktop\WPS-JSA-Project2`,
		/** 不需要同步更新的.js文件 */
		'exclude': new Set([
		])
	}
	
    /** JS宏编辑器对象 */ let jde
	try {
		jde = Application.JSIDE
	}
	catch {
		MsgBox(`没有权限，需要手动勾选“信任 WPS JS项目的访问。设置路线：<p style="font-size: 20px; color: red;">开发工具->宏安全性->可靠发行商</p>`)
		console.log(`[${new Date().toLocaleTimeString()}][__update__]本次代码更新失败`)
		return
	}
	/** 文件系统对象 */ const fs = FileSystem

	if (!fs.existsSync(config.default_update_folder_path)) {
		MsgBox(`<p style="font-size: 20px; color: red;">默认工程目录【${config.default_update_folder_path}】不存在</p>`)
	}

	/** 更新代码的工程目录路径 */ let updatePath
	/** 当前工作表对应的JS宏模块对象 */ let jsComponents
	{	// updatePath 与 jsComponents 初始化
		/** 工作簿名称，和英文括号拼接 */ let name = `(${ActiveWorkbook.Name})`
		/** 取得工作簿属性“备注”项 */ let text = ActiveWorkbook.BuiltinDocumentProperties("Comments")()
		let { JSProjects } = jde
		if (/^update:\s*/.test(text)) {	// 是否存在指定的工程目录
			let s = text.match(/(?<=^update:\s*).+$/)[0]
			updatePath = fs.absolutePath(updatePath)
		} else {
			updatePath = config.default_update_folder_path	// 如何没有指定工程目录，则使用默认工程目录
		}
		
		for (let i = 1; i <= JSProjects.Count; ++i) {
			project = JSProjects.Item(i)
			if (project.ActiveModuleWindow.Caption.includes(name)) {
				jsComponents = project.JSComponents
				// jsComponents.Item(1).Activate()
				break
			}
		}
	}

	/**
	 * 尝试添加JS宏编辑器内部组件
	 * @param {string} name - 组件名称
	 * @return {JsComponent} 如果组件中不存在 `name`，则创建并返回此对象，否则直接返回此对象
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

	/** 库集合 */ const libDic = {}
	/** 库命名正则 */ const parseReg = /(^.+?)(?:(@(?:\d+\.?)+)\.js)?$/
	{	// 初始化 libDic
		for (let i = 1; i <= jsComponents.Count; ++i) {
			let { Name: fullname } = jsComponents.Item(i)
			let [, libName, vcode] = fullname.match(parseReg)	// [ , 库名称, 库版本代号]
			if (vcode)
				libDic[libName] = { fullname, vcode }
		}
	}

	/**
	 * 重新编码代码
	 * @param {*} jsFilePath - js文件路径
	 * @returns {string} 新的代码
	 */
	function recode(jsFilePath) {
		return fs
			.ReadFile(jsFilePath)
			.replace(/^[;\s]*?import(?=[^\(])/gm, '//import')	// 注释静态import语句
	}
	/**
	 * 迁移代码
	 * @param {string} folderPath - 文件夹路径
	 */
	function transferCodeBy(folderPath) {
		fs.readdirSync(folderPath).forEach(file => {
			if (config.exclude.has(file) || !/\.js$/.test(file)) // 排除不需要更新的文件、非.js文件
				return
	
			let jsFilePath = `${folderPath}/${file}`
			let code = recode(jsFilePath)
			let [, libName, vcode] = file.match(parseReg)
			if (libDic[libName]) {
				if (libDic[libName].vcode == vcode)
					return
				jsComponents.Remove(jsComponents.Item(libDic[libName].fullname))
			}
	
			let { CodeModule: cm } = tryAddJsComponent(file)
			cm.DeleteLines(1, cm.CountOfLines)	// 删除全部代码
			cm.AddFromString(code)				// 重新添加
		})
	}

	let folderPath = updatePath + '/lib'
	if (fs.existsSync(folderPath)){
		transferCodeBy(folderPath)
	}
	folderPath = updatePath + '/src'
	if (!fs.existsSync(folderPath)){
		console.log(`${folderPath} 不存在，该目录存放项目逻辑源代码文件`)
		console.log(`[${new Date().toLocaleTimeString()}][__update__]本次代码更新失败`)
		return
	}
	
	transferCodeBy(folderPath)
	Application.OnTime(new Date(new Date() + 3600000 * 8 + 1000), `__main__`)	// 延时1秒后执行 __main__ 函数
}